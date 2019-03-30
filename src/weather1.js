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
      { name: 'Sunrise : ', images: require('./src/images/dawn.png') }, { name: 'Sunset : ', images:require('./src/images/sunset.png')},
      { name: 'Presure : ', images: require('./src/images/pressure.png')}, { name: 'Humadity : ', images:require('./src/images/drop.png')},
      { name: 'Sea Level : ', images: require('./src/images/sea-level.png') }, { name: 'Ground Level : ', images: require('./src/images/soil.png')},
    ];


type Props = {};
export default class weather1 extends Component<Props> {
  constructor(props) {
  super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
}
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city +
  '&appid=a36591ad9a8c5031abe7a70e476287fa&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
        });
      }
    );
}
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
            onChangeText={(city) => this.setState({ city })}
          />
          <TouchableOpacity style={{backgroundColor: '#560027', height: 30, width: 100, alignItems : 'center'}} onPress={() => this.getWeather()}>
            <Text style={{textAlign: 'center', color : 'white', fontSize: 18}}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <FlatGrid
          itemDimension={150}
          items={items}
          style={styles.gridView}
          renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: '#a00037', flexDirection: 'row', alignItems: 'center'}]}>
            <View style={{backgroundColor: 'white', height: 60, width: 60, justifyContent: 'center', alignItems:'center', marginRight: 5}}>
              <Image source={ item.images} style={{width: 30, height: 30, marginLeft: 10, marginRight: 10}} />
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemName}>{this.state.forecast.temp}</Text>
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
    fontSize: 11,
    color: 'white',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },

});
