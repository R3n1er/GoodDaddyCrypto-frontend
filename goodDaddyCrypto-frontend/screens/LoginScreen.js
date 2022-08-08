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
        screen: "WalletBtc",
      });
      // props.navigation.navigate("BottomNavigator", {
      //   screen: "Strategies",
      // });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>GOOD DADDY CRYPTO</Text>
      {/* // Input champs pour le mail */}
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
          console.log(email);
        }}
        value={email}
      />
      {/* Input champs pour le password  */}
      <Input
        placeholder="type your password"
        containerStyle={{ marginBottom: 25, width: "70%", color: "white" }}
        style={{ color: "white" }}
        onChangeText={(value) => setPassword(value)}
        value={password}
      />

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
    </ScrollView>
  );
};

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

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 60,
    marginBottom: "10%",
  },
  text: {
    color: "white",
    fontSize: 20,
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

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(LoginScreen);
