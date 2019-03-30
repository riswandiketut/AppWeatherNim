/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Styles, TextInput, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const items = [
      { name: 'Temp : ', images: require('./src/images/thermometer.png')}, { name: 'Wind Speed : ', images: require('./src/images/anemometer.png')},
      { name: 'Main : ', images: require('./src/images/sun.png') }, { name: 'Main Desc : ', images: require('./src/images/sun.png') },
      { name: 'Sun rise : ', images: require('./src/images/dawn.png') }, { name: 'Sunset : ', images:require('./src/images/sunset.png')},
      { name: 'Presure : ', images: require('./src/images/pressure.png')}, { name: 'Humadity : ', images:require('./src/images/drop.png')},
      { name: 'Sea Level : ', images: require('./src/images/sea-level.png') }, { name: 'Ground Level : ', images: require('./src/images/soil.png')},
    ];


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor : '#fa5788'}}>
        <View style={{backgroundColor : '#560027',height: 70, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 24, fontStyle: 'saint-serif'}}>WEATHER INFORMATION</Text>
        </View>
        <View style={styles.kotakInput}>
          <View style={{backgroundColor: '#8c0032', height: 35, width: 340, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color : 'white', fontSize: 18}}>Masukkan Nama Kota</Text>
          </View>
          <TextInput style={styles.TextInput}
            placeholder ="Nama Kota"
            keyboardType='ascii-capable'
          />
          <TouchableOpacity style={{backgroundColor: '#560027', height: 30, width: 100, alignItems : 'center'}}>
            <Text style={{textAlign: 'center', color : 'white', fontSize: 18}}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <FlatGrid
          itemDimension={150}
          items={items}
          style={styles.gridView}
          renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: '#a00037', flexDirection: 'row', alignItems: 'center'}]}>
            <View style={{backgroundColor: 'white', height: 60, width: 60, justifyContent: 'center', alignItems:'center', marginRight: 20}}>
              <Image source={ item.images} style={{width: 30, height: 30, marginLeft: 10, marginRight: 10}} />
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
        />
      <View style={{backgroundColor : '#560027',height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 24, fontStyle: 'saint-serif'}}>copyright @irwan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  kotakInput: {
    backgroundColor: 'white',
    height: 180,
    marginTop : 10,
    marginRight: 10,
    marginLeft:  10,
    marginBottom: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  TextInput: {
    height: 40,
    width: 200,
    borderColor: '#fa5788',
    borderWidth : 3,
    textAlign: 'center',
    color: 'black',
    marginTop: 30,
    marginBottom: 30,
  },

  gridView: {
    marginTop: 5,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 0,
    height: 60,
  },
  itemName: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },

});
