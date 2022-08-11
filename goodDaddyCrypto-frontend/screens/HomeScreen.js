import React from "react";

import { StyleSheet, View, Text } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

// React Native Elements

import { ThemeProvider, Button, createTheme } from "@rneui/themed";
// Import de la navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A0596', 'transparent']}
        style={styles.background}
      >
      <Text style={styles.textTitle}>Good Daddy Crypto</Text>
      <Button
        title="GO !"
        styles={styles.button}
        onPress={() => navigation.navigate("Login")}
      />
      </LinearGradient>
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
    fontSize: 50,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 550,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

// Definition du theme ReactNativeElements avec ThemeProvider

const theme = createTheme({
  components: {
    Button: {
      raised: true,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "black",
    },
  },
});
