import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {IcChevronRight, IcBellNormal, LogoSmall, IcSignOut} from '../../assets';
import {Header, ProfileTabSection} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Home} from '../Home';
import database from '@react-native-firebase/database';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const Profile = ({navigation}) => {
  const [nik, setNik] = useState('');
  const [dataPasien, setDataPasien] = useState({
    nama: '',
    username: '',
    alamat: '',
    no_telp: '',
    jenis_kel: '',
  });
  const [ready, setReady] = useState(false);
  const [where, setWhere] = useState({
    lat: null,
    lng: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    let geoOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 60 * 60 * 24,
    };
    setReady(false);
    setError(null);
    // this.setState({ready: false, error: null});
    //lokasi
    setInterval(() => {
      Geolocation.getCurrentPosition(geoSuccess, geoFailure, geoOptions);
    }, 10000),
      getLogin();
    // getDataPasien();
  }, []);

  const geoSuccess = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    setReady(true);
    setWhere({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    // this.setState({
    //   ready: true,
    //   where: {lat: position.coords.latitude, lng: position.coords.longitude},
    // });
  };
  const geoFailure = (err) => {
    setError(err.message);
    // this.setState({error: err.message});
  };

  const Keluar = async () => {
    await AsyncStorage.clear();
    navigation.reset({index:0, routes: [{name: 'SignIn'}]});
  };

  const getLogin = () => {
    try {
      AsyncStorage.getItem('nik').then((value) => {
        setNik(value);
        axios
      .get('https://lsp-nusantara.com/isoman-tracker-app/api/pasien?nik=' +value)
      .then((result) => {
        setDataPasien(result.data.data[0]);
        console.log(result.data.data[0]);
      });
      });
      
    } catch (error) {
      console.log(error);
    }
    
  };


  const onOpen = () => {
    database()
      .ref('lokasi/')
      .orderByChild('nik')
      .equalTo(nik)
      .once('value', function (snapshot) {
        snapshot.forEach(function (user) {
          user.ref.child('loc_end').set(`[${where.lng}, ${where.lat}]`);
          //${this.state.where.lat} Longitude: ${this.state.where.lng}
        });
      });
  };


  setTimeout(() => {
    onOpen();
  }, 20000);
  clearTimeout(() => {
    onOpen();
  }, 30000);

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
        <TouchableOpacity activeOpacity={0.7} onPress={Keluar}>
          <View style={styles.bell}>
            <IcSignOut />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.photo}>
          <LogoSmall />
        </View>
        <Text style={styles.namass}>{dataPasien.nama}</Text>
        <Text style={styles.nik}>{nik}</Text>
        <Text style={styles.judul}>Username : </Text>
        <Text style={styles.keterangan}>{dataPasien.username}</Text>
        <Text style={styles.judul}>Alamat : </Text>
        <Text style={styles.keterangan}>{dataPasien.alamat}</Text>
        <Text style={styles.judul}>No HP : </Text>  
        <Text style={styles.keterangan}>{dataPasien.no_telp}</Text>  
        <Text style={styles.judul}>Tanggal Mulai ISOMAN : </Text>  
        <Text style={styles.keterangan}>{dataPasien.tgl}</Text>    
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
    marginRight: 14,
    marginLeft: 90.7,
  },
  container: {backgroundColor: '#FFFFFF', paddingBottom: 400},
  photo: {alignItems: 'center', marginTop: 16, marginBottom: 16},
  namass: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: '#020202',
    textAlign: 'center',
  },
  nik: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#2a3661',
    textAlign: 'center',
    paddingBottom: 30,
  },
  judul: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#2a3661',
    textAlign: 'left',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  keterangan: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#2a3661',
    textAlign: 'left',
    textAlign: 'center',
    paddingBottom: 10,
  },
  content: {flex: 1, marginTop: 17},
});
