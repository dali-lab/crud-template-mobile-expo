import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Base from './src/components/Base';

import FrontPage from './src/screens/FrontPage';
import SignInPage from './src/screens/SignInPage';
import SignUpPage from './src/screens/SignUpPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='FrontPage' component={FrontPage} />
          <Stack.Screen name='SignInPage' component={SignInPage} />
          <Stack.Screen name='SignUpPage' component={SignUpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
