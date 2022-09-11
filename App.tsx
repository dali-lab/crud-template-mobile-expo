import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from './src/screens/FrontPage';
import SignInPage from './src/screens/SignInPage';
import SignUpPage from './src/screens/SignUpPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Front Page' component={FrontPage} />
          <Stack.Screen name='Sign In' component={SignInPage} />
          <Stack.Screen name='Sign Up' component={SignUpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
