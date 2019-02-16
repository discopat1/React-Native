import React from 'react';
import { StyleSheet, View } from 'react-native';
import HelloWorldApp from './screens/home';
import ButtonBasics from './components/Button';
import Scroll from './components/Scroll';
import List from './components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const App = () => (
  <View style={styles.container}>
    <ButtonBasics />
    <HelloWorldApp />
    <List />
    {/* <Scroll /> */}
  </View>
);

export default App;
