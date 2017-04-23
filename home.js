import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.headShot}
          source={require('./images/headshot.jpg')}
        />
        <Text style={styles.title}>
          Marlena Bowen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5fffa',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: '#00ced1',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'hoefler text',
    marginTop: 40,
    textAlign: 'center',
  },
  headShot: {
    borderColor: '#00ced1',
    borderWidth: 5,
    height: 300,
    width: 300,
  },
});
