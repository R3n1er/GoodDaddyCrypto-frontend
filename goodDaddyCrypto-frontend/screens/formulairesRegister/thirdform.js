import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Import React Native Elements
import { CheckBox, Button } from "@rneui/themed";

const Separator = () => <View style={styles.separator} />;

const ThirdForm = (props) => {
  // Initialisation des etats des checkboxs
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  // RETURN DU JSX
  return (
    <SafeAreaView contentContainerstyle={styles.container}>
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

      <View>
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
          {/* // VIEW CheckBox de Gauche */}
          <View>
            {/* // Choix1 */}
            <CheckBox
              center
              title="100 €"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check1}
              onPress={() => setCheck1(!check1)}
            />
            {/* //Choix 2 */}
            <CheckBox
              center
              title="200 €"
              checkedTitle="OK MAFIA"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check2}
              onPress={() => setCheck2(!check2)}
            />
            {/* //Choix 3 */}
            <CheckBox
              center
              title="300 €"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check3}
              onPress={() => setCheck3(!check3)}
            />
          </View>
          {/* // View pour les checkboxs à droite */}
          <View>
            {/* // Choix4 */}
            <CheckBox
              center
              title="400 €"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check4}
              onPress={() => setCheck4(!check4)}
            />
            {/* // Choix5 */}
            <CheckBox
              center
              title="500 €"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check5}
              onPress={() => setCheck5(!check5)}
            />
            {/* // Choix6 */}
            <CheckBox
              center
              title="600 €"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check6}
              onPress={() => setCheck6(!check6)}
            />
          </View>
        </View>
      </View>
      {/* // Button suivant */}
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Button
            style={styles.button}
            tittle="SUIVANT"
            onPress={() => {
              props.navigation.navigate("FifthForm");
              if (check1) {
                props.addAnswer(1,3);
              }
              else if (check2) {
                props.addAnswer(2,3);
              }
              else if (check3) {
                props.addAnswer(3,3);
              }
              else if (check4) {
                props.addAnswer(4,3);
              }
              else if (check5) {
                props.addAnswer(5,3);
              }
              else if (check6) {
                props.addAnswer(6,3);
              }
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

export default connect(null, mapDispatchToProps)(ThirdForm);
