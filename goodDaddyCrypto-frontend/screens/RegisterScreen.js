import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
} from "react-native";
import {connect} from 'react-redux';

function LoginScreen(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    props.addToken(reponse.userToken);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/favicon.png")} />
      <Text style={styles.textTitle}>GOOD DADDY CRYPTO</Text>
      <TextInput
        placeholder="Nom"
        style={styles.input}
        onChangeText={(value) => setLastName(value)}
        value={lastName}
      />
      <TextInput
        placeholder="Prenom"
        style={styles.input}
        onChangeText={(value) => setFirstName(value)}
        value={firstName}
      />
      <TextInput
        placeholder="telephone"
        style={styles.input}
        onChangeText={(value) => setTelephone(value)}
        value={telephone}
      />
      <TextInput
        placeholder="email"
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <TextInput
        placeholder="Mot de passe"
        style={styles.input}
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
      addToken: function() {
          dispatch( {type: 'addToken', token:token} )
      }
    }
   }
   
export default connect(null, mapDispatchToProps)(LoginScreen);

