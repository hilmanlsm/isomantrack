import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const _validasiSession = async() => {
      const isLogin = await AsyncStorage.getItem('session_id')
      if (isLogin) {
        
        navigation.replace('MainApp');
      } else {
            setTimeout(() => {
              navigation.replace('SignIn');
    }, 2000);

      }
    }
    _validasiSession()
//     setTimeout(() => {
//       navigation.replace('SignIn');
// }, 2000);

  }, []);
  return (
    <View
      style={{
        backgroundColor: '#FAFAFC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 9}} />
      <Text
        style={{
          color: '#4357A2',
          fontSize: 20,
        }}>
        BY STMIK DCI TEAM
      </Text>
    </View>
  );
};

export default SplashScreen;
