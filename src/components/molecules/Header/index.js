import React, { Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBellNormal} from '../../../assets';
import Geolocation from '@react-native-community/geolocation';

const Header = ({
  title,
  subTitle,
  onPress,
  color = '#FFFFFF',
  titleColor = '#020202',
  textColor = '#8D92A3',
}) => {
  return (
    <View style={styles.container(color)}>
      <View>
        <Text style={styles.title(titleColor)}>{title}</Text>
        <Text style={styles.subTitle(textColor)}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (color) => ({
        backgroundColor: color,
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
      }),
      title: (titleColor) => ({
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: titleColor,
      }),
      subTitle: (textColor) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: textColor,
      }),
})


// import React from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {IcBellNormal} from '../../../assets';
// import Geolocation from '@react-native-community/geolocation';

// const Header = ({
//   title,
//   subTitle,
//   onPress,
//   color = '#FFFFFF',
//   titleColor = '#020202',
//   textColor = '#8D92A3',
// }) => {
//   return (
//     <View style={styles.container(color)}>
//       <View>
//         <Text style={styles.title(titleColor)}>{title}</Text>
//         <Text style={styles.subTitle(textColor)}>{subTitle}</Text>
//       </View>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   container: (color) => ({
//     backgroundColor: color,
//     paddingHorizontal: 24,
//     paddingTop: 30,
//     paddingBottom: 24,
//     flexDirection: 'row',
//     alignItems: 'center',
//   }),
//   title: (titleColor) => ({
//     fontSize: 22,
//     fontFamily: 'Poppins-Medium',
//     color: titleColor,
//   }),
//   subTitle: (textColor) => ({
//     fontSize: 14,
//     fontFamily: 'Poppins-Light',
//     color: textColor,
//   }),
// });
