import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Header from './Header';
import Workouts from './Workouts';
import Footer from './Footer';

export default class MainPage extends Component {
  render() {
    const {navigation} = this.props;
    return (
      // Try setting `flexDirection` to `column`.
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>

          <View style={{ flex: 1, alignItems: 'center' }}><Header navigation={navigation} /></View>

          <View><Text style={{textAlign:'center'}}>Workouts</Text></View>

          <View style={{ flex: 5 }}><Workouts navigation={navigation}/></View>

          <View style={{flex:1}}><Footer/></View>
        
      </SafeAreaView>
    );
  }
};

