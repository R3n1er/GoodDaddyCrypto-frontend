
import React from 'react';
// Import de librairie ui-neumorphism


import { StyleSheet, View, Text } from 'react-native';

// Import du CSS correspondant à ui-neumorphism

export default function LoginScreen() {

    return(
        // View est équivalent à div
        <View> 
            <Text>LOGIN</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#222121',
        alignItems: 'center',
        justifyContent: 'center'

    }
})
