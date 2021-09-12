import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {NewsDummy1} from '../../../assets';

const NewsCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.container}>
        <View>
          <Image source={NewsDummy1} style={styles.imgStyle} />
        </View>
        <View>
          <Text style={styles.title}>Berita Terikini COVID-19</Text>
          <Text style={styles.text}>
            Contrary to popular belief, Lorem Ipsum
          </Text>
          <Text style={styles.text}>is not simply random text</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 112,
    width: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imgStyle: {width: 150, height: 112},
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 15,
    paddingTop: 5,
    color: '#020202',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    paddingHorizontal: 13,
    color: '#8D92A3',
  },
});
