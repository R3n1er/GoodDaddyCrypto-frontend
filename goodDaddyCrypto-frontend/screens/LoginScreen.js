import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Linking, TouchableOpacity } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

export default function LoginScreen() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/favicon.png")} />
      <Text style={styles.title}>GOOD DADDY CRYPTO</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={() => {}}
      />
      <TextInput
        placeholder="Mot de passe"
        style={styles.input}
        onChangeText={() => {}}
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.button}>SIGN-IN</Text>
      </TouchableOpacity>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("RegisterScreen")}
      >
        Nouveau compte ? Créer un compte !{" "}
      </Text>
    </ScrollView>
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

  input: {
    backgroundColor: "white",
    color: "green",
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
    backgroundColor: "#222121",
  },
});
