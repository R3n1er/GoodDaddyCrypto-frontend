import React from 'react';
// Import de librairie ui-neumorphism
import { Button } from 'ui-neumorphism';

import { StyleSheet, View, Text } from 'react-native';

// Import de React Native Elements

import { Icon } from "@rneui/base";

// Import de la navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import du CSS correspondant à ui-neumorphism
import 'ui-neumorphism/dist/index.css';

export default function HomeScreen() {

    return(
        // View est équivalent à div
        <View> 
            <Text>HOME</Text>
            <Button>GO !</Button>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#222121',
        alignItems: 'center',
        justifyContent: 'center'

    }
})


