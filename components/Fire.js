import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native'

export default class Fire extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.onPress}
                >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/barbell.png')}

                    />
                </TouchableOpacity>

                <Text style={[styles.countText]}>
                    {this.state.count !== 0 ? this.state.count : null}
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        marginBottom:'auto',
        marginTop:'auto',
        justifyContent: 'flex-end',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF',
        marginBottom:'auto',
        marginTop:'auto'
    }
})
