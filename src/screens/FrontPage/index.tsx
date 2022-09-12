import React from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAppDispatch from '../../hooks/useAppDispatch';
import { logout } from '../../redux/slices/authSlice';
import AppButton from '../../components/AppButton';
import FormatStyle from '../../utils/FormatStyle';
import NavType from '../../utils/NavType';
import TextStyles from '../../utils/TextStyles';
import { ROUTES } from '../../utils/constants';

const FrontPage = () => {
  const navigation = useNavigation<NavType>();
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={FormatStyle.container}>
      <ScrollView>
        <Text style={TextStyles.title}>DALI Crud Template</Text>
        <AppButton
          onPress={() => navigation.navigate(ROUTES.SIGNIN)}
          title={'Sign In'}
          isArrow={true}
        />
        <AppButton
          onPress={() => navigation.navigate(ROUTES.SIGNUP)}
          title={'Sign Up'}
          isArrow={true}
        />
        <AppButton
          onPress={() => navigation.navigate(ROUTES.VERIFY)}
          title={'Verify'}
          isArrow={true}
        />
        <AppButton
          onPress={() => navigation.navigate(ROUTES.USERS)}
          title={'Users (admin only)'}
          isArrow={true}
        />
        <AppButton
          onPress={() => navigation.navigate(ROUTES.RESOURCES)}
          title={'Resources (user or admin)'}
          isArrow={true}
        />
        <AppButton
          onPress={() => dispatch(logout({}))}
          title={'Logout'}
          isArrow={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FrontPage;
