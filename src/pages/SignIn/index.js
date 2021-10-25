import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LogoSmall} from '../../assets';
import {Button, Gap, Header, TextInput} from '../../components';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { WebView } from 'react-native-webview';


export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nik: '',
      password: '',
      username: '',
      id: '',
    };
  }

  onChangeText = (namaState, Value) => {
    this.setState({
      [namaState]: Value,
      [namaState]: Value,
    });
  };

  onSubmit = () => {
    if (this.state.nik && this.state.password) {
    const LogIn = {
      nik:this.state.nik,
      password:this.state.password,
    };
    axios
      .post('https://lsp-nusantara.com/isoman-tracker-app/api/login', LogIn)
      // .then(result => console.log(result.data.message))
      // .then(result => {
      //   this.setState(result.data.data);
      //   // alert('Login successful')
      // })
      .then((result) => {
        if (result.data.message === 'Berhasil Login') {
          alert(result.data.message);
          console.log(result);
          AsyncStorage.setItem(
            'session_id',
            'session_id' + Math.random().toString,
          );
          AsyncStorage.setItem('nik', this.state.nik);
          this.props.navigation.navigate('MainApp');
        } else {
          alert(result.data.message);
        }
        // alert(responseJson.message);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  render() {
    return (
      <View style={styles.page}>
        {/* <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      /> */}
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
          <TextInput
            label="NIK"
            placeholder="Masukkan No KTP anda"
            onChangeText={this.onChangeText}
            value={this.state.nik}
            namaState="nik"
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Masukkan Password"
            onChangeText={this.onChangeText}
            value={this.state.password}
            namaState="password"
          />
          <Gap height={24} />
          <TouchableOpacity style={styles.tombol} onPress={this.onSubmit}>
            <Text style={styles.textTombol}>SUBMIT</Text>
          </TouchableOpacity>
          {/* <Button text="Sign In" onPress={() => this.onSubmit} /> */}
          {/* () => navigation.replace('MainApp') */}
        </View>
      </View>
    );
  }
}

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
  tombol: {
    backgroundColor: '#2D46B9',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
