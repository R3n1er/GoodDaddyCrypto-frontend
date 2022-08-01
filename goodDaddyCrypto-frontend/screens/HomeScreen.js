import React, { Component } from "react";
// Import de librairie ui-neumorphism
import { Button } from "ui-neumorphism";
import { overrideThemeVariables } from "ui-neumorphism";

// Import du CSS correspondant à ui-neumorphism
import "ui-neumorphism/dist/index.css";

import { StyleSheet, View, Text } from "react-native";

// Import de React Native Elements

// import { Icon } from "@rneui/base";

// Import de la navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen({ navigation }) {
  return (
    // View est équivalent à div
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HOME</Text>
      <Button title="GO !" onPress={() => navigation.navigate("LoginScren")} />
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
