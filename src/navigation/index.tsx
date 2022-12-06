import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';
import { UserScopes } from '../redux/slices/usersSlice';
import { checkConnection } from '../redux/slices/connectionSlice';
import { initCredentials } from '../redux/slices/authSlice';
import { VerifyPage } from '../screens/AuthScreens';
import AuthNavigation from './AuthNavigation';
import BaseNavigation from './BaseNavigation';

const RootNavigation = () => {
  const { authenticated } = useAppSelector((state) => state.auth);
  const { role } = useAppSelector((state) => state.auth);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkConnection()).finally(() => { });
  }, []);
  useEffect(() => {
    dispatch(initCredentials({})).finally(() => { });
  }, []);
  
  if (!authenticated) {
    return (
      <AuthNavigation />
    );
  } else if (authenticated && role === UserScopes.Unverified) {
    return (
      <NavigationContainer>
        <VerifyPage />
      </NavigationContainer>
    );
  } else {
    return (
      <BaseNavigation />
    );
  }
};

export default RootNavigation;