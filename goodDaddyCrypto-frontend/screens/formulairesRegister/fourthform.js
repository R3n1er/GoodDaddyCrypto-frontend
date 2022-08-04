import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import ProgressBarre from '../Components/ProgressBar';

const Separator = () => (
    <View style={styles.separator} />
  );


const Formulaire = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.profilRisque}>
          Détermination de ton profil de risque
        </Text>
        <Separator />
        <Text style={styles.title}>
          Tu as investis un capital de départ de <span style={{fontWeight: bold}}>1000€</span> sur le
          Bitcoin ₿. Sur une période d'un mois, le Bitcoin perd <span>45%</span>
          de sa valeur.<span>Que fais-tu ?</span>
        </Text>
        <Separator />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.answer}>Option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.answer}>Option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.answer}>Option 3</Text>
        </TouchableOpacity>

            <View>
                <Text style={styles.profilRisque}>
                    Détermination de ton profil de risque
                </Text>
                <Separator />
                <Text style={styles.title}>
                    Tu as investis <span style={{ fontWeight: "bold" }}>1000€</span> pour commencer, puis tous  les mois tu investis <span style={{ fontWeight: "bold" }}>150€.</span> En 1 mois le <span style={{ fontWeight: "bold" }}>Bitcoin</span> chute de 40%. Que fais-tu ?
                </Text>
                <Separator />
            </View>

            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <RadioButton
                  value="first"
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}
                />
                <Text style={styles.label}><span style={checked === 'first' ? {color:'red'} : {color:'black'}}>TU VENDS TOUT</span></Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <RadioButton
                  value="second"
                  status={ checked === 'second' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('second')}
                />
                <Text style={styles.label}><span style={checked === 'second' ? {color:'red'} : {color:'black'}}>TU VENDS 50% DU CAPITAL</span></Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <RadioButton
                  value="third"
                  status={ checked === 'third' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('third')}
                />
                <Text style={styles.label}><span style={checked === 'third' ? {color:'red'} : {color:'black'}}>TU GARDES TON INVESTISSEMENT</span></Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <RadioButton
                  value="fourth"
                  status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('fourth')}
                />
                <Text style={styles.label}><span style={checked === 'fourth' ? {color:'red'} : {color:'black'}}>METTRE EN PAUSE L'INVESTISSEMENT</span></Text>
              </View>
            </View>
            <View>
            </View> 
        </View>
        <View> { ProgressBarre } </View>
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
});

export default Formulaire;
