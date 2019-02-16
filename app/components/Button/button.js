import React, { Component } from 'react';
import { Alert, Platform, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

export default class Touchables extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
  
    _onLongPressButton() {
      Alert.alert('You long-pressed the button!')
    }
  
  
    render() {
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
