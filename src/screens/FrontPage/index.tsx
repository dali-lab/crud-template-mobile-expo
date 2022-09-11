import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Button, ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../../utils/GlobalStyle';
import NavType from '../../utils/NavType';
import { useAppDispatch } from '../../app/hooks';
import { initCredentials } from '../../redux/slices/authSlice';

const FrontPage = () => {
  const navigation = useNavigation<NavType>();

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(initCredentials({}))
  }, [])
  
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView>
        <Text>DALI Crud Template</Text>
        <TouchableOpacity 
          style={GlobalStyle.button}
          onPress={() => navigation.navigate('Sign In')}
        > 
          <Text style={GlobalStyle.lf}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyle.button}> 
          <Text style={GlobalStyle.lf}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyle.button}> 
          <Text style={GlobalStyle.lf}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyle.button}> 
          <Text style={GlobalStyle.lf}>Users (admin only)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyle.button}> 
          <Text style={GlobalStyle.lf}>Resources (user or admin)</Text>
        </TouchableOpacity>
        <Button title='Logout' onPress={() => console.log()} />
      </ScrollView>
    </SafeAreaView>
  )
}

// onPress={() => navigation.navigate('Sign In')}

export default FrontPage;