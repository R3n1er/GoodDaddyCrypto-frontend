import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
// Import react Native Elements
import { Button } from "@rneui/base";
import { Input } from "@rneui/themed";

import { LinearGradient } from 'expo-linear-gradient';

import { connect } from "react-redux";
import { Linking, TouchableOpacity } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = (props) => {
  //Initialisation des etats pour le formulaire
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  // Fonction Submit Sign-In
  const submitSignIn = async () => {
    var rawResult = await fetch(
      "https://gooddaddybackend.herokuapp.com/users/sign-in",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${email}&password=${password}`,
      }
    );
    var result = await rawResult.json();
    console.log(result);
    props.addToken(result.userToken);
    if (result.userToken != null) {
      props.navigation.navigate("BottomNavigator", {
        screen: "Dashboard",
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#1A0596', 'transparent']}
        style={styles.background}
      >
      <Text style={styles.title}>GOOD DADDY CRYPTO</Text>
      {/* // Input champs pour le mail */}
      <View style={styles.input}>
      <Input
        placeholder="user@mail.com"
        containerStyle={{
          marginBottom: 25,
          width: "70%",
          color: "white",
          textInputStyle: "white",
        }}
        style={{ color: "white" }}
        keyboardType="email-address"
        onChangeText={(value) => {
          setEmail(value);
        }}
        value={email}
      />
      {/* Input champs pour le password  */}
      <Input
        placeholder="type your password"
        containerStyle={{ marginBottom: 25, width: "70%", color: "white" }}
        
        secureTextEntry={true}
        style={{ color: "white" }}
        onChangeText={(value) => setPassword(value)}
        value={password}
      />
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Button
          style={styles.button}
          onPress={() => {
            submitSignIn();
          }}
        >
          SIGN-IN
        </Button>
      </TouchableOpacity>

      <Text
        style={styles.text}
        onPress={() => props.navigation.navigate("Register")}
      >
        Nouveau compte ? Créer un compte !{" "}
      </Text>
      </LinearGradient>
    </ScrollView>
  );
};

// Style CSS 🎨
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222121",
    color: "white",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  input: {
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 175,
    textAlign: 'center',
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: 'center',
    marginTop: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(LoginScreen);
