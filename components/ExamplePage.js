import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export default class ExamplePage extends Component {
    render() {
        return (

            <SafeAreaView>
                <View>
                    <Text>profile</Text>
                    <Text>name</Text>
                    <Text>lastname</Text>
                </View>
            </SafeAreaView>
        );
    }
}