import React, { Component } from 'react';
import { SafeAreaView, Button, View, Image, TextInput } from 'react-native';

class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{ width: 200, height: 250, paddingBottom: 50 }}
                    />
                </View>
                <View style={{flex:1}}>
                    <TextInput style={{ flex: 1 ,}}
                        placeholder="Username"
                    />
                    <TextInput style={{ flex: 1 }}
                        placeholder="Password"
                    />
                </View>
                <View style={{flex:1}}>
                    <Button 
                    
                    onPress={() => {
                        this.props.navigation.navigate('Main');
                    }}
                    title="Login"
                    width="200"
                    />
                </View>
                
            </SafeAreaView>
        );
    }
}
export default LoginScreen