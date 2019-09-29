import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

export default class WorkoutCreation extends Component {

    render() {
        return (
            <View style={{ padding: 10, justifyContent: "space-around", flexDirection: 'column' }}>
                <View style={{height:50}}>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Enter Workout Name"
                    />
                </View>
                <View style={{height:50}}>

                    <Button title="Add Exercise" />
                </View>
                <View>

                    <Button title="Save Workout" />
                </View>

            </View>
        );
    }
}

