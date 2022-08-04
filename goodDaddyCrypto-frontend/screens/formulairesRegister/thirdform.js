import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import ProgressBar from "../../Components/ProgressBar";


// Import React Native Elements
import { CheckBox, Button } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";

const Separator = () => <View style={styles.separator} />;

const Formulaire = (props) => {
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
              props.navigation.navigate("FourthForm");
            }}
          />
        </TouchableOpacity>
      </View>
      {<ProgressBar></ProgressBar>}
    </SafeAreaView>
  );
  // ************* OLD CODE***************
  // const [checked, setChecked] = React.useState('first');

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View>
  //       <View>
  //         <Text style={styles.profilRisque}>
  //           Détermination de ton profil de risque
  //         </Text>
  //         <Separator />
  //         <Text style={styles.title}>
  //           Pour un investissement intial de 1000 €, quel perte maximale
  //           peux-tu accepter ?
  //         </Text>
  //         <Separator />
  //       </View>
  //       {/* // Début des choix en checkbox */}
  //       <View style={styles.container}>
  //         <View style={styles.checkboxContainer}>
  //           <CheckBox
  //             value="first"
  //             status={checked === "first" ? "checked" : "unchecked"}
  //             onPress={() => setChecked("first")}
  //           />
  //           <Text style={styles.label}>100 €</Text>
  //         </View>
  //       </View>
  //       <View style={styles.container}>
  //         <View style={styles.checkboxContainer}>
  //           <RadioButton
  //             value="second"
  //             status={checked === "second" ? "checked" : "unchecked"}
  //             onPress={() => setChecked("second")}
  //           />
  //           <Text style={styles.label}>200 €</Text>
  //         </View>
  //       </View>
  //       <View style={styles.container}>
  //         <View style={styles.checkboxContainer}>
  //           <RadioButton
  //             value="third"
  //             status={checked === "third" ? "checked" : "unchecked"}
  //             onPress={() => setChecked("third")}
  //           />
  //           <Text style={styles.label}>300 €</Text>
  //         </View>
  //       </View>
  //       <View style={styles.container}>
  //         <View style={styles.checkboxContainer}>
  //           <RadioButton
  //             value="fourth"
  //             status={checked === "fourth" ? "checked" : "unchecked"}
  //             onPress={() => setChecked("fourth")}
  //           />
  //           <Text style={styles.label}>400 €</Text>
  //         </View>
  //       </View>
  //       <View style={styles.container}>
  //         <View style={styles.checkboxContainer}>
  //           <RadioButton
  //             value="fifth"
  //             status={checked === "fifth" ? "checked" : "unchecked"}
  //             onPress={() => setChecked("fifth")}
  //           />
  //           <Text style={styles.label}>500 €</Text>
  //         </View>
  //       </View>
  //       <View style={styles.container}>
  //         <View style={styles.checkboxContainer}>
  //           <RadioButton
  //             value="sixth"
  //             status={checked === "sixth" ? "checked" : "unchecked"}
  //             onPress={() => setChecked("sixth")}
  //           />
  //           <Text style={styles.label}>600 €</Text>
  //         </View>
  //       </View>
  //       <View></View>
  //     </View>
  //   </SafeAreaView>
  // );
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

export default Formulaire;
