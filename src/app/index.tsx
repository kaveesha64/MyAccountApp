
import { useRouter } from 'expo-router';
import { useState} from 'react';

import {Alert Button,StuleSheet,text,TextInput,View} from 'react native';


export default function RegistrationScreen() {
   

const router = useRouter();
  const [userName, setUserName] = useState('');   
  const [email, setEmail] = useState('');    
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReview = () => {
    if (!userName || !email || !phoneNumber || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    router.push('/review', {
      params: {
        userName,
        email,
        phoneNumber
        
      },
    });
  };
  return (
    <View style={styles.container}>
      <text style={styles.title}>Create Your Account</text>
      
      <TextInput
        style={styles.input}
        placeholder="Username" value={userName} onChangeText={setUserName} />
      <TextInput
        style={styles.input}
        placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TextInput
        style={styles.input}
        placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
        <button title="Review Details" onPress={handleReview} />
    </View>
  );
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    padding: '20',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  }});

 