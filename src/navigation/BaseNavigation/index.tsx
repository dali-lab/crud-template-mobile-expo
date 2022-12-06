import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Octicons, Ionicons } from '@expo/vector-icons';
import useAppSelector from '../../hooks/useAppSelector';
import { UserScopes } from '../../redux/slices/usersSlice';
import { FrontPage, ResourcesPage, UsersPage, ForbiddenPage } from '../../screens/BaseScreens';
import { BaseTabRoutes, BaseNavigationList } from '../routeTypes';
import Colors from '../../utils/Colors';

const BaseTab = createBottomTabNavigator<BaseNavigationList>();

const ProtectedRoute = (allowableScopes: UserScopes[]) => {
  const { authenticated, role } = useAppSelector((state) => state.auth);

  return (allowableScopes.includes(role) && authenticated);
};

const BaseNavigation = () => {
  return (
    <NavigationContainer>
      <BaseTab.Navigator
        screenOptions={{
          header: () => null,
          tabBarStyle: {
            backgroundColor: Colors.primary.normal,
          },
          tabBarActiveTintColor: Colors.secondary.white,
          tabBarInactiveTintColor: Colors.neutral[8],
        }}
        initialRouteName={BaseTabRoutes.FRONT}
      >
        <BaseTab.Screen
          name={BaseTabRoutes.FRONT}
          component={FrontPage}
          options={{
            tabBarLabel: (props) => {
              return (
                <Text style={{ color: props.color }}>home</Text>
              );
            },
            tabBarIcon: (props) => (
              <AntDesign name='home' color={props.color} size={26} />
            ),
          }}
        />
        <BaseTab.Screen
          name={BaseTabRoutes.USERS}
          component={
            ProtectedRoute([UserScopes.Admin])
              ? UsersPage
              : ForbiddenPage
          }
          options={{
            tabBarLabel: (props) => {
              return (
                <Text style={{ color: props.color }}>users</Text>
              );
            },
            tabBarIcon: (props) => (
              <Ionicons name='person-outline' color={props.color} size={26} />
            ),
          }}
        />
        <BaseTab.Screen
          name={BaseTabRoutes.RESOURCES}
          component={
            ProtectedRoute([UserScopes.User, UserScopes.Admin])
              ? ResourcesPage
              : ForbiddenPage
          }
          options={{
            tabBarLabel: (props) => {
              return (
                <Text style={{ color: props.color }}>resources</Text>
              );
            },
            tabBarIcon: (props) => (
              <Octicons name='graph' color={props.color} size={26} />
            ),
          }}
        />
      </BaseTab.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigation;