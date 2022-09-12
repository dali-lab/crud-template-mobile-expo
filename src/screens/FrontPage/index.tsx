import React from 'react';
import { Text, TouchableOpacity, Button, ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../components/AppButton';
import GlobalStyle from '../../utils/FormatStyle';
import NavType from '../../utils/NavType';
import TextStyles from '../../utils/TextStyles';

const FrontPage = () => {
  const navigation = useNavigation<NavType>();
  
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView>
        <Text style={TextStyles.title}>DALI Crud Template</Text>
        <AppButton
          onPress={() => navigation.navigate('Sign In')}
          title={'Sign In'}
          isArrow={true}
        />
        <AppButton
          onPress={() => navigation.navigate('Sign Up')}
          title={'Sign Up'}
          isArrow={true}
        />
        <AppButton
          onPress={() => navigation.navigate('Verify')}
          title={'Verify'}
          isArrow={true}
        />
        <AppButton
          onPress={() => navigation.navigate('Users')}
          title={'Users (admin only)'}
          isArrow={true}
        />
        <AppButton
          onPress={() => navigation.navigate('Resources')}
          title={'Resources (user or admin)'}
          isArrow={true}
        />
        <AppButton
          onPress={() => console.log('logout')}
          title={'Logout'}
          isArrow={true}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default FrontPage;