import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          <View style={styles.paragraph}>
            <Text style={styles.text}>
              I am a mobile developer at
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL('http://joinroot.com')}>
              Root Insurance Company.
            </Text>
            <Text style={styles.text}>
              I love cats, coffee, and beautiful user interfaces.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.text}>
              I also run a music and creative arts summer camp for teens called
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL('http://grrrlsrockcolumbus.com')}>
              Grrrls Rock Columbus.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderColor: '#00ced1',
    borderStyle: 'dotted',
    borderWidth: 5,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f5fffa',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  link: {
    color: '#00ced1',
    fontFamily: 'hoefler text',
    fontSize: 30,
    fontWeight: 'normal',
    lineHeight: 35,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  paragraph: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  text: {
    color: '#00ced1',
    fontFamily: 'hoefler text',
    fontSize: 30,
    fontWeight: 'normal',
    lineHeight: 35,
    textAlign: 'center',
  },
});
