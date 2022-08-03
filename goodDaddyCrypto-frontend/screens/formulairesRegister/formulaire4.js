import React, { useState } from "react";
import {StyleSheet, Text, View, Button, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';

/* <Text style={styles.title}>
          Tu as investis un capital de départ de{" "}
          <span style={{ fontWeight: "bold" }}>1000€</span> sur le Bitcoin ₿.
          Sur une période d'un mois, le Bitcoin perd{" "}
          <span style={{ fontWeight: "bold" }}>45%</span>
          de sa valeur.<span style={{ fontWeight: "bold" }}>Que fais-tu ?</span>
        </Text>
*/

// PAGE 222222222

// PAGE FORMULAIRE 1



// SÉPARATEUR LIGNE

const Separator = () => (
    <View style={styles.separator} />
  );


const Formulaire = () => {

    const [checked, setChecked] = React.useState('first');

    return(
        <SafeAreaView style={styles.container}>
        <View>



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
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    profilRisque: {
      fontSize: 28,
      textAlign: 'center',
    },
      title: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 8,
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },

    label: {
      margin: 8,
    },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Formulaire;