import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Home from './home.js';
import About from './about.js';

export default class AboutMe extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{screen:'Home'}}
        renderScene={(route, nav) => {return this.renderScene(route, nav)}}
        navigationBar={
          <Navigator.NavigationBar
            navigationStyles={Navigator.NavigationBar.StylesIOS}
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (route.screen === 'Home') {
                  return null;
                } else {
                  return (
                    <View>
                      <TouchableHighlight onPress={() => navigator.pop()}>
                        <Text style={styles.button}>Back</Text>
                      </TouchableHighlight>
                    </View>
                  );
                }
              },
              RightButton: (route, navigator, index, navState) => {
                if (route.screen === 'About') {
                  return null;
                } else {
                  return (
                    <View>
                      <TouchableHighlight onPress={() => navigator.push({screen:'About'})}>
                        <Text style={styles.button}>Next</Text>
                      </TouchableHighlight>
                    </View>
                  );
                }
              },
              Title: (route, navigator, index, navState) => {
                if (route.screen == 'Home') {
                  return (
                    <Text style={styles.title}>Welcome</Text>
                  );
                } else {
                  return (
                    <Text style={styles.title}>About Me</Text>
                  );
                }
              }
            }}
          />
        }
      />
    );
  }
  renderScene(route,nav) {
  switch (route.screen) {
    case "Home":
      return <Home navigator={nav} />
    case "About":
      return <About navigator={nav} />
    }
  }
}

const styles = StyleSheet.create({
  button: {
    color: '#00ced1',
    fontFamily: 'avenir next',
    fontWeight: 'normal',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: '#00ced1',
    fontFamily: 'avenir next',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
});

AppRegistry.registerComponent('AboutMe', () => AboutMe);
