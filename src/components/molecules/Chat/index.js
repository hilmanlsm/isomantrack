import React, {useState, useLayoutEffect, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import IconMaterial from 'react-native-vector-icons/Feather';
import {IcChevronsDown, IcSend} from '../../../assets';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([
  ]);

  const [dataPasien, setDataPasien] = useState({
    nama: '',
    username: '',
    alamat: '',
    no_telp: '',
    jenis_kel: '',
    puskesmas_id: '',
  });

  const [userNik, setUserNik] = useState('');

  // const webUser = {
  //   _id: dataPasien.puskesmas_id, // Ini user dari Web
  // };

  // const mobileUser = {
  //   _id: userNik, // Immni user dari nik ya (user mobile)
  //   name: dataPasien.nama,
  // };
  
  
  useEffect(() => {
   
    // database()
    //   .ref('user_chat')
    //   .on('value', (snapshot) => {
    //     let isEmptyListUserChats = true;
    //     snapshot.forEach((data) => {
    //       if (data?.key) {
    //         const uuidChild = data.key;
    //         const value = data.val();
    //         const {id_admin, id_user, pasien} = value;
    //         const sameAdmin = id_admin == webUser._id;
    //         const sameUserMobile = id_user == mobileUser._id;
    //         if (sameAdmin && sameUserMobile) isEmptyListUserChats = false;
    //       }
    //     });
    //     if (isEmptyListUserChats) {
    //       let newRef = database().ref('user_chat').push();
    //       const newItem = {
    //         id_admin: webUser._id,
    //         id_user: mobileUser._id,
    //         pasien: mobileUser.name,
    //       };
    //       newRef.set(newItem);
    //     }
    //   });
    
    first();

  }, []);

  useEffect(() => {
    getData();
    getLogin();
  }, []);

  const first = () => {
    getLogin();
    getData();
  };
  
  const getData = () => {
    database()
    .ref('cat')
    .on('value', (snapshot) => {
      let tempMessages = [];
      snapshot.forEach((data) => {
        if (data?.key) {
          const uuidChild = data.key;
          const value = data.val();
          const {_id, text, createdAt,user} = value;
          if (user == userNik && _id == dataPasien.puskesmas_id || _id == userNik) {
            const message = {
              _id: uuidChild,
              text,
              createdAt,
              user: {_id},
            };
            tempMessages.unshift(message);
            //console.log(tempMessages)
          }
        }
        setMessages((prev) => {
          return [...tempMessages];
        });
      });
    });
  };

  const getLogin = () => {
    try {
      AsyncStorage.getItem('nik').then((value) => {
        setUserNik(value);
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
  
  const onSend = useCallback((messages = []) => {
    const {_id,text,createdAt,user} = messages[0];
    let newRef = database().ref('cat/').push();
    const newItem = {
      _id: userNik,
      text,
      createdAt: `${new Date()}`,
      user: dataPasien.puskesmas_id,
    };
    
    newRef.set(newItem);
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendButtonContainer}>
          <IcSend />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#4357A2',
            borderRadius: 4,
          },
          right: {
            backgroundColor: '#8D92A3',
            borderRadius: 4,
          },
        }}
        textStyle={{
          left: {
            color: '#FFFFFF',
          },
          right: {
            color: '#FFFFFF',
          },
        }}
      />
    );
  };

  const scrollToBottom = () => {
    return <IcChevronsDown />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{_id:userNik}}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottom}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({
  sendButtonContainer: {
    backgroundColor: '#4357A2',
    paddingRight: 6,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 6,
  },
});
