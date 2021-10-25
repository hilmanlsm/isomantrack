import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import {NewsDummy1} from '../../../assets';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class NewsCard extends React.Component {
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

  // handleRefresh = () => {
  //     this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
  // }

  goDetail = () => {
    
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          renderItem={item => this.renderItemComponent(item)}
          keyExtractor={item => item.id.toString()}
          // ItemSeparatorComponent={this.ItemSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          // onPress={this.props.navigation.navigate('Profile')}
        />
      </SafeAreaView>
      )
  }
}

const styles = StyleSheet.create({
containers: {
  height: 100,
  margin: 10,
  backgroundColor: '#FFF',
  borderRadius: 6,
},
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
      // elevation: 2,
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 20,
    },
image: {
  height: 100,
  width:100,
  borderRadius: 4,
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