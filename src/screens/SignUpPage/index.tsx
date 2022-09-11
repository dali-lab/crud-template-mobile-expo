import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../../utils/GlobalStyle';

const SignInPanel = () => {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*
  const handleSubmit = () => {
    // Send only if all fields filled in
    if(email && password) {
      signInUser(email, password).then(() => {
        // console.log('authentication status:', authenticated);
      });
    }
  };
  */
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
        //onPress={handleSubmit}
      >
        <Text>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={() => navigation.navigate('Sign Up')}
      >
        <Text>
          Don&apos;t have an account?
          {' '}
          <Text>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SignInPanel;