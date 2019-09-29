import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Chest',
        exercises: ['Bench Press', 'Cable flies', 'Dips'],
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Back',
        exercises: ['Pull-ups', 'Deadlift', 'Bent over row'],
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Legs',
        exercises: ['Back Squat', 'Leg Press', 'Lunges'],
    },
];


export default class Workouts extends Component {
    
    renderFooter = (data) => {
        return(
            <View style={styles.item}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('WorkoutCreate') }>
                    <Text style={styles.title}>Add Workout</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderItem = (data) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('WorkoutView', {exercises: data.item.exercises, title: data.item.title}) }>
                    <Text style={styles.title}>{data.item.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        //const {navigation} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    ListFooterComponent={this.renderFooter}
                    data={DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
