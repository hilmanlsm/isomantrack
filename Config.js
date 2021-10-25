import React from 'react';
import App from './src/App';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCr3IQ8HnSA15wvMSG2N5B-sJEhQ8JC0hM",
    authDomain: "pertama-5fa3b.firebaseapp.com",
    databaseURL: "https://pertama-5fa3b-default-rtdb.firebaseio.com",
    projectId: "pertama-5fa3b",
    storageBucket: "pertama-5fa3b.appspot.com",
    messagingSenderId: "532635605413",
    appId: "1:532635605413:web:c1587dacda146a61ed704c"
  };
  

  if (!firebase.apps.length){
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
  }

  const db = firebase.database();



// export const{firebase,database};
  


function Config() {
    return (
<App/>
    )
}

export default Config
