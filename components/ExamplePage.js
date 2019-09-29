import React, { Component } from 'react';
import { SafeAreaView, View,Image, Text } from 'react-native';

export default class ExamplePage extends Component {
    render() {
        return (

            <SafeAreaView>
                <View style={{alignItems: "center"}}>
                    <Text>profile</Text>
                    <Image 
                        style={{ width: 400, height: 400 }}
                        source={require('../assets/michael.jpg')}
                    />
                    <Text>First Name: Michael</Text>
                    <Text>Last Name: Kensington</Text>
                    <Text>Favourite Drink: RedBull</Text>
                    <Text>Favourite Telco: Vonex</Text>
                </View>
            </SafeAreaView>
        );
    }
}