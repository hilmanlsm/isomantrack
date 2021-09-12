import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import IconMaterial from 'react-native-vector-icons/Feather';
import {IcChevronsDown, IcSend} from '../../../assets';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://ui-avatars.com/api/?name=System+Admin',
        },
      },
      {
        _id: 2,
        text: 'Hello World',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'https://ui-avatars.com/api/?name=System+Admin&background=4357a2&color=ffffff',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
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
      user={{
        _id: 1,
      }}
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
