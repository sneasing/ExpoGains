//this.props.navigation.getParam(paramName, defaultValue)
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class WorkoutView extends Component {
    renderItem = (data) => {
        return(
            <View style={styles.item}>
                <TouchableOpacity>
                    <Text style={styles.title}>{data}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>{this.props.navigation.getParam('title', 'invalid title')}</Text>
                <FlatList
                    data={this.props.navigation.getParam('exercises', 'yolo')}
                    renderItem={({ item }) => this.renderItem(item)}
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
        fontSize: 15,
        marginBottom: 'auto',
        marginTop: 'auto',
        textAlign: 'center',
    },
});
