import React, { useState } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity, TextInput,
} from 'react-native';
import useAppDispatch from '../../hooks/useAppDispatch';
import { signUp } from '../../redux/slices/authSlice';
import GlobalStyle from '../../utils/GlobalStyle';

const SignUpPage = () => {
  const dispatch = useAppDispatch();
  
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = () => {
    // Send only if all fields filled in
    if (!name) alert('Please enter your name!');
    else if (!email) alert('Please enter an email address!');
    else if (!password) alert('Please enter a password!');
    else if (!confirmPassword) alert('Please confirm your password!');
    else if (!(password === confirmPassword)) alert('Passwords do not match!');
    else {
      dispatch(signUp({ email, password, name }));
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <Text>Sign Up</Text>
      <Text>Name</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Name"
      />
      <Text>Email</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Text>Confirm Password</Text>
      <TextInput
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleSubmit}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SignUpPage;