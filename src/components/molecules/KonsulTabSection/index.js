import React from 'react';
import {useNavigation} from '@react-navigation/core';
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

const KonsultasiTab = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <ItemListMenu text="Gejala" />
      <ItemListMenu text="Level Gejala" />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Hasil Diagnosa :</Text>
        <Text style={styles.textDua}>Sakit Kepala</Text>
        <Text style={styles.textTiga}>Level Sedang</Text>
        <Text style={styles.textTitle}>Solusi :</Text>
        <Text style={styles.textTiga}>Banyak minum air putih</Text>
      </View>
    </View>
  );
};

const ChatTab = () => {
  return <Chat />;
};

const initialLayout = {width: Dimensions.get('window').width};

const KonsulTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Konsultasi'},
    {key: 'second', title: 'Chat'},
  ]);

  const renderScene = SceneMap({
    first: KonsultasiTab,
    second: ChatTab,
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

export default KonsulTabSection;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    paddingTop: 11,
  },
  textDua: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  textTiga: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
