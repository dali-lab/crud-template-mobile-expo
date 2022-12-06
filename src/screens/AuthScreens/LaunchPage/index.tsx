import React from 'react';
import { Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../../components/AppButton';
import FormatStyle from '../../../utils/FormatStyle';
import NavType from '../../../utils/NavType';
import { ROUTES } from '../../../utils/constants';
import LogoImage from '../../../assets/dali_dark.png';

const FrontPage = () => {
  const navigation = useNavigation<NavType>();

  return (
    <SafeAreaView style={FormatStyle.container}>
      <ScrollView>
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * (3 / 7),
          }}
          source={{ uri: Image.resolveAssetSource(LogoImage).uri }}
        />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default FrontPage;
