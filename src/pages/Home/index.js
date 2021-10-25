import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  SafeAreaView,
  FlatList
} from 'react-native';
import {IcBellNormal} from '../../assets/Icon';
import {IlCovid} from '../../assets/Ilustration';
import {Gap, Header, NewsCard} from '../../components';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        refreshing: true,
    }
}

componentDidMount() {
    this.fetchCats();
}

fetchCats() {
    // this.setState({ refreshing: true });
    axios
    .get('https://isoman-tracker-app.lsp-nusantara.com/api/info')
    .then((result) => {
      this.setState({data:result.data});
      console.log({data:result.data});
    });
    // fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
    //     .then(res => res.json())
    //     .then(resJson => {
    //         this.setState({ data: resJson });
    //         console.log({data: resJson});
    //         this.setState({ refreshing: false });
    //     }).catch(e => console.log(e));
}

renderItemComponent = (data) =>
    <TouchableOpacity style={styles.containers} >
      <View style={styles.container} >
      <View>
      <Image source={{ uri:`https://lsp-nusantara.com/isoman-tracker-app/`+ data.item.gambar }} style={styles.imgStyle} />
      </View>
      <View>
      <Text style={styles.title}>{data.item.judul}</Text>
      <Text style={styles.text}>
      {data.item.isi}
      </Text>
      </View>
      </View>
      {/* <Text style={styles.title}>{data.item.judul}</Text>
      <Image source={NewsDummy1} style={styles.imgStyle} /> */}
        {/* <Image style={styles.image} source={{ uri: data.item.gambar }} /> */}
    </TouchableOpacity>

ItemSeparator = () => <View style={{
    height: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginLeft: 10,
    marginRight: 10,
}}
/>
  
  render() {
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
              <View style={styles.bell} onPress={this.onOpens}>
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
         {/* <SafeAreaView>
         <FlatList
          data={this.state.data}
          renderItem={item => this.renderItemComponent(item)}
          keyExtractor={item => item.id.toString()}
          // ItemSeparatorComponent={this.ItemSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          // onPress={this.props.navigation.navigate('Profile')}
        />
      </SafeAreaView> */}
            {/* <Button
        title="Detail"
        onPress={() => this.props.navigation.navigate('Profile')}
        />  */}
              <NewsCard />
            </View>
          </View>
        </View>
      </ScrollView>
    );
    // return (
    //   // <ScrollView>
    //     <WebView
    //     source={{ uri: 'http://pddik.lsp-nusantara.com/index_berita.php' }}
    //   />
      
    // );
  }
}

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
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import {IcBellNormal} from '../../assets/Icon';
// import {IlCovid} from '../../assets/Ilustration';
// import {Gap, Header, NewsCard} from '../../components';
// import Geolocation from '@react-native-community/geolocation';

// const Home = () => {
//   return (
//     <ScrollView>
//       <View>
//         <View style={styles.headerContainer}>
//           <Header
//             color="#FFFFFF"
//             titleColor="#4357A2"
//             title="ISOMANTracker"
//             subTitle="Jaga Kesehatan bersama kami!"
//           />
//           <TouchableOpacity activeOpacity={0.7}>
//             <View style={styles.bell}>
//               <IcBellNormal />
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.bannerContainer}>
//           <Image source={IlCovid} style={styles.banner} />
//         </View>

//         <View style={styles.container}>
//           <View style={styles.infoContainer}>
//             <Text style={styles.infoTitle}>Informasi</Text>
//           </View>
//           <View style={styles.newsCardContainer}>
//             <NewsCard />
//             <NewsCard />
//             <NewsCard />
//             <NewsCard />
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   headerContainer: {
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   bell: {
//     padding: 16,
//     marginRight: 16,
//     marginLeft: 50,
//   },
//   bannerContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 30,
//     paddingTop: 23,
//     paddingBottom: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   banner: {width: 330, height: 151},
//   container: {backgroundColor: '#FFFFFF'},
//   infoContainer: {
//     height: 32,
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#F2F2F2',
//     borderStyle: 'solid',
//   },
//   infoTitle: {
//     fontFamily: 'Poppins-Regular',
//     fontSize: 18,
//     color: '#4357A2',
//     paddingTop: 3,
//   },
//   newsCardContainer: {
//     marginHorizontal: 30,
//     marginTop: 20,
//     marginBottom: 15,
//   },
// });
