import React from "react";
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

import ProgressBar from '../../Components/ProgressBar';

// React Redux
import { connect } from "react-redux";

// SÉPARATEUR LIGNE

const Separator = () => <View style={styles.separator} />;

const secondform = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* // Go back button */}
      <View style={styles.buttonReturn}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 50,
            width: 120,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("FirstForm")}
        >
          <Icon name="chevron-left" size={20} />
          <Text> RETOUR </Text>
        </TouchableOpacity>
      </View>
      {/* // End go back button */}

      <View style={styles.page}>
        <View>
          <Text style={styles.profilRisque}>
            Détermination de ton profil de risque
          </Text>
          <Separator />
          <Text style={styles.title}>
            Es-tu prêt à accepter des pertes de ton investissement initial ?
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
                props.addAnswer(1, 2);
                props.navigation.navigate("ThirdForm");
              }}
            >
              Je ne suis pas à l'aise avec cela{" "}
            </Text>
          </TouchableOpacity>
          {/* Choix 2 */}
          <TouchableOpacity>
            <Text
              style={styles.answer}
              onPress={() => {
                props.addAnswer(2, 2);
                props.navigation.navigate("ThirdForm");
              }}
            >
              Pas sure
            </Text>
          </TouchableOpacity>
          {/* Choix 3 */}
          <TouchableOpacity>
            <Text
              style={styles.answer}
              onPress={() => {
                props.addAnswer(3, 2);
                props.navigation.navigate("ThirdForm");
              }}
            >
              Je ne voudrais pas perdre plus de la moitié de mon capital
            </Text>
          </TouchableOpacity>
          {/* Choix 4 */}
          <TouchableOpacity>
            <Text
              style={styles.answer}
              onPress={() => {
                props.addAnswer(3, 2);
                props.navigation.navigate("ThirdForm");
              }}
            >
              Je suis ok avec cela !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      { <ProgressBar></ProgressBar> } 
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

export default connect(null, mapDispatchToProps)(secondform);
