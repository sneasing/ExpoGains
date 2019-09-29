import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native'

export default class ProfileIcon extends Component {


    onPress = () => {
        this.props.navigation.navigate('Example')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.onPress}
                >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/profileDefault.png')}

                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})
