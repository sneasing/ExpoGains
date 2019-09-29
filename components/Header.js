import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileIcon from './ProfileIcon';
import Fire from './Fire';

export default class Header extends Component {
  render() {
    const {navigation} = this.props
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
            <ProfileIcon style={styles.textStyle} navigation={navigation}/>
            <Text style={styles.textStyle}>FitnessApp</Text>
            <Fire style={styles.textStyle}/>
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