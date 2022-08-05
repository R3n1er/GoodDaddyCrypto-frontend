import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

// Import React Native Elements
import { Input } from "@rneui/themed";
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
// React Redux
import { connect } from "react-redux";

// Initialisation des etats pour le formulaire
function RegisterScreen(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Declaration de la fonction Submit Register
  var submitRegister = async function (props) {
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
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      {/* // Button go back */}
      <View style={styles.buttonReturn}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 50,
            width: 120,
            alignItems: "center",
          }}
          onPress={() => console.log(props.navigation.navigate("Login"))}
        >
          <Icon name="chevron-left" size={20} />
          <Text> RETOUR </Text>
        </TouchableOpacity>

        {/* // Bandeau titre */}
      </View>
      <Text style={styles.textTitle}>GOOD DADDY CRYPTO</Text>
      <Input
        placeholder="Nom"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        onChangeText={(value) => setLastName(value)}
        value={lastName}
        style={{color:"white"}}
      />
      <Input
        placeholder="Prenom"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        onChangeText={(value) => setFirstName(value)}
        value={firstName}
        style={{color:"white"}}
      />
      <Input
        placeholder="telephone"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        keyboardType="numeric"
        onChangeText={(value) => setTelephone(value)}
        value={telephone}
        style={{color:"white"}}
      />
      <Input
        placeholder="email"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <Input
        placeholder="Mot de passe"
        containerStyle="{{marginBottom: 25, width: '70%', }}"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        value={password}
        style={{color:"white"}}
      />
      <Button
        title="REGISTER"
        type="solid"
        onPress={() => {
          props.navigation.navigate("FirstForm");
          submitRegister();
        }}
      />
    </ScrollView>
    </SafeAreaView>
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
    marginBottom: 50,
    marginTop:50
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
  buttonReturn: {
    flex: 2,
    justifyContent: "center",
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
  scrollView: {
    marginHorizontal: 20,
  },
});
// REDUX

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(RegisterScreen);
