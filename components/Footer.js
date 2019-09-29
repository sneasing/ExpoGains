import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    const {navigation} = this.props
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.textStyle}>Volume</Text>
            <Text style={styles.textStyle}>Stats</Text>
            <Text style={styles.textStyle}>Friends</Text>
            <Text style={styles.textStyle}>Settings</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    textStyle: {
        flex:1,
        textAlign: 'center', 
        marginBottom:'auto',
        marginTop: 'auto',
        
      }
})