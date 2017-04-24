import React, { Component } from 'react';
import {
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
  headShot: {
    borderColor: '#00ced1',
    borderWidth: 5,
    height: 300,
    width: 300,
  },
  title: {
    color: '#00ced1',
    fontFamily: 'hoefler text',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
  },
});
