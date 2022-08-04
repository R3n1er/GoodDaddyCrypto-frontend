import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
// Import Icon FontAwesome
import Icon from "react-native-vector-icons/FontAwesome";

// React Redux
import { connect } from "react-redux";

// Import ProgressBar Component
import ProgressBar from "../../Components/ProgressBar";

// SÉPARATEUR LIGNE
const Separator = () => <View style={styles.separator} />;

const fourthform = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* // Bouton Go Back */}
      <View style={styles.buttonReturn}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 50,
            width: 120,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("ThirdForm")}
        >
          <Icon name="chevron-left" size={20} />
          <Text> RETOUR </Text>
        </TouchableOpacity>
      </View>
      {/* // End of GoBack Button */}
      <View>
        <Text style={styles.profilRisque}>
          Détermination de ton profil de risque
        </Text>
        <Separator />
        <Text style={styles.title}>
          Tu as investis un capital de départ de 1000€ sur le Bitcoin ₿. Sur une
          période d'un mois, le Bitcoin perd 45% de sa valeur.Que fais-tu ?
        </Text>
        <Separator />
      </View>
{/* // Ajout du composant Progress Bar */}
      <ProgressBar></ProgressBar>
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

// Fonction dispatch to Store
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
export default connect(null, mapDispatchToProps)(fourthform);

