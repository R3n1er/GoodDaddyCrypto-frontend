import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

// Import React Native Elements
import { Input } from "@rneui/themed";
import { Button } from "@rneui/base";

// React Redux
import {connect} from 'react-redux';

// Initialisation des etats pour le formulaire
function RegisterScreen(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// Declaration de la fonction Submit Register
  var submitRegister = async function () {
    var result = await fetch(
      "https://gooddaddybackend.herokuapp.com/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `firstName=${firstName}&lastName=${lastName}&telephone=${telephone}&email=${email}&password=${password}`,
      }
    );
    var response = await result.json();
    console.log(response);
    props.addToken(response.userToken);
  };
// Return the JSX
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/favicon.png")} />
      <Text style={styles.textTitle}>GOOD DADDY CRYPTO</Text>
      <Input
        placeholder="Nom"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        onChangeText={(value) => setLastName(value)}
        value={lastName}
      />
      <Input
        placeholder="Prenom"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        onChangeText={(value) => setFirstName(value)}
        value={firstName}
      />
      <Input
        placeholder="telephone"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        onChangeText={(value) => setTelephone(value)}
        value={telephone}
      />
      <Input
        placeholder="email"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <Input
        placeholder="Mot de passe"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        onChangeText={(value) => setPassword(value)}
        value={password}
      />
      <Button
        title="REGISTER"
        type="solid"
        onPress={() => {
          props.navigation.navigate("Register");
          submitRegister();
        }}
      />
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
    fontSize: 50,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 60,
    marginBottom: "10%",
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
// REDUX

function mapDispatchToProps(dispatch) {
    return {
      addToken: function(token) {
          dispatch( {type: 'addToken', token:token} )
      }
    }
   }
   
export default connect(null, mapDispatchToProps)(RegisterScreen);

