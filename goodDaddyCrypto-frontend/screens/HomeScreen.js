import React, { Component } from "react";

import { StyleSheet, View, Text, Button } from 'react-native';

// Import de la navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen({ navigation }) {

    return(
        // View est équivalent à div
        <View style={styles.container}> 
            <Text>HOME</Text>
            <Button
            title="GO !"
            onPress={() => navigation.navigate('Login')}
            />
        </View>

    );

}

// Style CSS 🎨
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222121",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});

