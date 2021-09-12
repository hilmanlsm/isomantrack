import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IcBellWhite} from '../../assets';
import {Header, KonsulTabSection} from '../../components';

const Konsul = () => {
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Header
          color="#4357A2"
          title="PUSKESMAS MANONJAYA"
          titleColor="#FFFFFF"
          subTitle="Hubungi kami kapan saja!"
          textColor="#FFFFFF"
        />
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.bell}>
            <IcBellWhite />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <KonsulTabSection />
      </View>
    </View>
  );
};

export default Konsul;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#4357A2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bell: {
    padding: 16,
    marginRight: 16,
    marginLeft: -1,
  },
  tabContainer: {flex: 1},
});
