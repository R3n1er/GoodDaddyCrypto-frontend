import React from "react";
// Import de librairie ui-neumorphism

import { StyleSheet, View, Text } from "react-native";

// Import du CSS correspondant à ui-neumorphism

export default function DashBoardScreen() {
  return (
    // View est équivalent à div
    <View>
      <Text>DASHBOARD</Text>
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
