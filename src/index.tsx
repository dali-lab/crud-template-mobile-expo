import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppDispatch } from './app/hooks';
import FrontPage from '../src/screens/FrontPage';
import SignInPage from '../src/screens/SignInPage';
import SignUpPage from '../src/screens/SignUpPage';
import { initCredentials } from './redux/slices/authSlice';

const Index = () => {
  const Stack = createStackNavigator();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initCredentials({}))
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Front Page' component={FrontPage} />
        <Stack.Screen name='Sign In' component={SignInPage} />
        <Stack.Screen name='Sign Up' component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;