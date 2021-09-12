import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IcBellNormal} from '../../assets/Icon';
import {IlCovid} from '../../assets/Ilustration';
import {Gap, Header, NewsCard} from '../../components';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.headerContainer}>
          <Header
            color="#FFFFFF"
            titleColor="#4357A2"
            title="ISOMANTracker"
            subTitle="Jaga Kesehatan bersama kami!"
          />
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.bell}>
              <IcBellNormal />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={IlCovid} style={styles.banner} />
        </View>

        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Informasi</Text>
          </View>
          <View style={styles.newsCardContainer}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bell: {
    padding: 16,
    marginRight: 16,
    marginLeft: 50,
  },
  bannerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingTop: 23,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {width: 330, height: 151},
  container: {backgroundColor: '#FFFFFF'},
  infoContainer: {
    height: 32,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    borderStyle: 'solid',
  },
  infoTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#4357A2',
    paddingTop: 3,
  },
  newsCardContainer: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 15,
  },
});
