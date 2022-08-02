import React, { Component } from "react";
// Import de librairie ui-neumorphism


import { StyleSheet, View, Text, Button } from 'react-native';

// Import de React Native Elements

// import { Icon } from "@rneui/base";

// Import de la navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// Import du CSS correspondant à ui-neumorphism


export default function HomeScreen({ navigation }) {

    return(
        // View est équivalent à div
        <View style={styles.container}> 
            <Text>HOME</Text>
            <Button
            title="GO !"
            onPress={() => navigation.navigate('BottomNavigator')}
            />
        </View>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222121",
    alignItems: "center",
    justifyContent: "center",
  },
});
