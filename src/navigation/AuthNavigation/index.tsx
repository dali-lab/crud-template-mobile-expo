import React from 'react';
import { ROUTES } from '../../utils/constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LaunchPage, SignInPage, SignUpPage } from '../../screens/AuthScreens';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{ header: () => null }}
      >
        <AuthStack.Screen name={ROUTES.LAUNCH} component={LaunchPage} />
        <AuthStack.Screen name={ROUTES.SIGNIN} component={SignInPage} />
        <AuthStack.Screen name={ROUTES.SIGNUP} component={SignUpPage} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;