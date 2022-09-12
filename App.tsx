import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Index from './src';
import { useFonts, Raleway_400Regular, Raleway_600SemiBold, Raleway_800ExtraBold, } from '@expo-google-fonts/raleway';


export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_800ExtraBold
  });

  if (!fontsLoaded) {
    return <View />
  }
  
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
