import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

// Import ProgressBar Component
import ProgressBar from "../../Components/ProgressBar";

// React Redux
import { connect } from "react-redux";

const Separator = () => <View style={styles.separator} />;

const ThirdForm = (props) => {
  // RETURN DU JSX
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* // Bouton Go Back */}
      <View style={styles.buttonReturn}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 50,
            width: 120,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("SecondForm")}
        >
          <Icon name="chevron-left" size={20} />
          <Text> RETOUR </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5 }}>
        <View>
          <Text style={styles.profilRisque}>
            Détermination de ton profil de risque
          </Text>
          <Separator />
          <Text style={styles.title}>
            Pour un investissement intial de 1000 €, quelle perte maximale
            peux-tu accepter ?
          </Text>
          <Separator />
        </View>
        {/* // Début du choix des checkBox et application de Flexbox*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Debut liste de choix  */}
          <View>
            {/* Choix 1 */}
            <TouchableOpacity>
              <Text
                style={styles.answer}
                onPress={() => {
                  props.addAnswer(1, 3);
                  props.navigation.navigate("FourthForm");
                }}
              >
                100€
              </Text>
            </TouchableOpacity>
            {/* Choix 2 */}
            <TouchableOpacity>
              <Text
                style={styles.answer}
                onPress={() => {
                  props.addAnswer(2, 3);
                  props.navigation.navigate("FourthForm");
                }}
              >
                200€{" "}
              </Text>
            </TouchableOpacity>
            {/* Choix 3 */}
            <TouchableOpacity>
              <Text
                style={styles.answer}
                onPress={() => {
                  props.addAnswer(3, 3);
                  props.navigation.navigate("FourthForm");
                }}
              >
                300€{" "}
              </Text>
            </TouchableOpacity>
            {/* Choix 4 */}
            <TouchableOpacity>
              <Text
                style={styles.answer}
                onPress={() => {
                  props.addAnswer(4, 3);
                  props.navigation.navigate("FourthForm");
                }}
              >
                400€{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {<ProgressBar></ProgressBar>}
    </ScrollView>
  );
};

// Styles CSS 🖼
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
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

export default connect(null, mapDispatchToProps)(ThirdForm);
