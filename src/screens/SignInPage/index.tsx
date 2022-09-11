import React, { useState } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAppDispatch from '../../hooks/useAppDispatch';
import { signIn } from '../../redux/slices/authSlice';
import GlobalStyle from '../../utils/GlobalStyle';

const SignInPanel = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = () => {
    // Send only if all fields filled in
    if (!email) alert('Please enter an email address!');
    else if (!password) alert('Please enter a password!');
    else {
      dispatch(signIn({ email, password }));
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Type your email"
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Type your password"
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleSubmit}
      >
        <Text>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SignInPanel;