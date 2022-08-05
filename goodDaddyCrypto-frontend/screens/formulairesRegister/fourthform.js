import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
    <ScrollView ContentContainerstyle={styles.container}>
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
          Tu as investi 1000€ de capital pour débuter, puis tous les mois tu
          investis 150€. 6 mois après, le Bitcoin perd 40% de sa valeur en 1
          mois. Que fais-tu ?
        </Text>
        <Separator />
      </View>
      {/* Debut liste de choix  */}
      <View>
        {/* Choix 1 */}
        <TouchableOpacity>
          <Text
            style={styles.answer}
            onPress={() => {
              props.addAnswer(1, 3);
              props.navigation.navigate("FifthForm");
            }}
          >
            Tu vends tout !
          </Text>
        </TouchableOpacity>
        {/* Choix 2 */}
        <TouchableOpacity>
          <Text
            style={styles.answer}
            onPress={() => {
              props.addAnswer(2, 3);
              props.navigation.navigate("FifthForm");
            }}
          >
            Tu vend 50% de ton portefeuille pour te protéger
          </Text>
        </TouchableOpacity>
        {/* Choix 3 */}
        <TouchableOpacity>
          <Text
            style={styles.answer}
            onPress={() => {
              props.addAnswer(3, 3);
              props.navigation.navigate("FifthForm");
            }}
          >
            Tu ne vends pas, mais tu mets en pause des investissements
            récurrents en attendant une nouvelle hausse du marché.
          </Text>
        </TouchableOpacity>
        {/* Choix 4 */}
        <TouchableOpacity>
          <Text
            style={styles.answer}
            onPress={() => {
              props.addAnswer(4, 3);
              props.navigation.navigate("FifthForm");
            }}
          >
            Tu conserves ton investissement et tu poursuis mensuellement ton
            investissement récurrent
          </Text>
        </TouchableOpacity>
      </View>
      {/* // Ajout du composant Progress Bar */}
      <ProgressBar></ProgressBar>
    </ScrollView>
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

