import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Chat} from '..';
import ItemListMenu from '../ItemListMenu';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: 1,
      marginLeft: '17.6%',
    }}
    style={{backgroundColor: '#FFFFFF'}}
    tabStyle={{}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 14,
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Akun = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
        height: 300,
      }}>
      <Text>AKun Saya</Text>
    </View>
  );
};

const Info = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <ItemListMenu text="Bantuan" />
      <ItemListMenu text="Privacy & Policy" />
      <ItemListMenu text="Tentang Kami" />
      <ItemListMenu text="Version" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ProfileTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Akun Saya'},
    {key: 'second', title: 'Info'},
  ]);

  const renderScene = SceneMap({
    first: Akun,
    second: Info,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({});
