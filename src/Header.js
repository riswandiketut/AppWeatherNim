/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, styles} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const Header = (props) => {
  const { textStyle, backHeader } = styles;
  return (
    <View style={backHeader}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
    backHeader: {
      backgroundColor: '#E91E63',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      position: 'relative',
      marginTop: 10
    },
    textStyle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    }
}

export default Header;
