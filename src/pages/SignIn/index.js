import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoSmall} from '../../assets';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign In"
        subTitle="Mari berkoordinasi di Era COVID-19"
        color="#FFFFFF"
        titleColor="#020202"
        textColor="#8D92A3"
      />
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.title}>ISOMAN TRACKER</Text>
          <LogoSmall />
        </View>
        <Gap height={28} />
        <TextInput label="NIK" placeholder="Masukkan No KTP anda" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Masukkan Password" />
        <Gap height={24} />
        <Button text="Sign In" onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  logo: {justifyContent: 'center', alignItems: 'center'},
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#4357A2',
    textAlign: 'center',
  },
});
