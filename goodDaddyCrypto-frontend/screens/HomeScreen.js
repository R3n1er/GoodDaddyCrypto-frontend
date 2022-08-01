import React from "react";

import { StyleSheet, View, Text, Button } from 'react-native';

// Import de la navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen({ navigation }) {

    return (
      // View est équivalent à div
      <View style={styles.container}>
        <Text style={styles.textTitle}>Good Daddy Crypto</Text>
        <Button
          title="GO !"
          styles={styles.button}
          onPress={() => navigation.navigate("Login")}
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
  textTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "50",
  },

  text: {
    color: "white",
    fontSize: "20",
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

