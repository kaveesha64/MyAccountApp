
import { useRouter } from 'expo-router';
import { useState } from 'react';

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default function RegistrationScreen() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [yearOfBirth, setYearOfBirth] = useState("");
  // Handle Review function checks all fields and passwords
  // before navigating to the Review screen.
  const handleReview = () => {
    if (!userName || !email || !phoneNumber || !password || !confirmPassword || !yearOfBirth) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
const currentYear = new Date().getFullYear();
const age = currentYear - Number(yearOfBirth);
    router.push({
      pathname: '/review',
      params: {
        userName,
        email,
        phoneNumber,
        age
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      {/* 'placeholder' is used to show a hint to the user */}
      {/* 'onChangeText' updates the state when the user types */}
      {/* 'keyboardType' specifies the keyboard type */}
      {/* 'secureTextEntry' hides the text input */}

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TextInput
  style={styles.input}
  placeholder="Year of Birth"
  keyboardType="numeric"
  value={yearOfBirth}
  onChangeText={setYearOfBirth}
/>

      <Button title="Review Details" onPress={handleReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
});
