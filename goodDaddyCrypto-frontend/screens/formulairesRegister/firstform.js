// PAGE FORMULAIRE 1

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// React Redux
import { connect } from "react-redux";

// SÉPARATEUR LIGNE

const Separator = () => <View style={styles.separator} />;

const firstform = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonReturn}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 50,
            width: 120,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Icon name="chevron-left" size={20} />
          <Text> RETOUR </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <View>
          <Text style={styles.profilRisque}>
            Détermination de ton profil de risque
          </Text>
          <Separator />
          <Text style={styles.title}>
            Quel est ton niveau en connaissances Crypto ?
          </Text>
          <Separator />
        </View>
        <View>
          <TouchableOpacity>
            <Text
              onPress={() => {
                props.addAnswer(1, 1);
                props.navigation.navigate("SecondForm");
              }}
              style={styles.answer}
            >
              Je n'y connais rien
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              onPress={() => {
                props.addAnswer(2, 1);
                props.navigation.navigate("SecondForm");
              }}
              style={styles.answer}
            >
              Débutant
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              onPress={() => {
                props.addAnswer(3, 1);
                props.navigation.navigate("SecondForm");
              }}
              style={styles.answer}
            >
              Intérmediaire
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              onPress={() => {
                props.addAnswer(4, 1);
                props.navigation.navigate("SecondForm");
              }}
              style={styles.answer}
            >
              Confirmé
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles CSS🎨
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  profilRisque: {
    fontSize: 28,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 8,
  },
  answer: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 16,
    backgroundColor: "yellow",
    borderRadius: 12,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonReturn: {
    flex: 2,
    justifyContent: "center",
  },
  page: {
    flex: 4,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addAnswer: function (answer, questionNumber) {
      dispatch({
        type: "addAnswer",
        answer: answer,
        questionNumber: questionNumber,
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(firstform);
