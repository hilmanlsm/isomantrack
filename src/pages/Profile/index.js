import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {IcBellWhite, LogoSmall} from '../../assets';
import {Header, ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Header
          color="#4357A2"
          title="ISOMANTracker"
          titleColor="#FFFFFF"
          subTitle="Profil saya"
          textColor="#FFFFFF"
        />
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.bell}>
            <IcBellWhite />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.photo}>
          <LogoSmall />
        </View>
        <Text style={styles.nama}>Nama Pasien</Text>
        <Text style={styles.nik}>3206098263541092</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  headerContainer: {
    backgroundColor: '#4357A2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bell: {
    padding: 16,
    marginRight: 16,
    marginLeft: 103.7,
  },
  container: {backgroundColor: '#FFFFFF', paddingBottom: 16},
  photo: {alignItems: 'center', marginTop: 16, marginBottom: 16},
  nama: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  nik: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  content: {flex: 1, marginTop: 17},
});
