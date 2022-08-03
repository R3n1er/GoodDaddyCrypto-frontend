import React, { useState } from "react";
import {StyleSheet, Text, View, Button, Alert, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';


// SÉPARATEUR LIGNE

const Separator = () => (
    <View style={styles.separator} />
  );


const Formulaire = () => {

    const [checked, setChecked] = React.useState('first');
    const [text, onChangeText] = React.useState("REVENUS");
    const [number, onChangeNumber] = React.useState(null);

    return(
        <SafeAreaView style={styles.container}>
        <View>



            <View>
                <Text style={styles.profilRisque}>
                    Demande des gains mensuels 
                </Text>
                <Separator />
                <Text style={styles.title}>
                    QUEL EST TON SALAIRE NET ?
                </Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="SALAIRE"
                      keyboardType="numeric"
                    />
                <Separator />
                <Text style={styles.title}>
                    AVEZ-VOUS DES REVENUS COMPLÉMENTAIRES ?
                </Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={text}
                      placeholder="REVENUS"
                      keyboardType="numeric"
                    />
                <Separator />
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
      input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
      title: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 8,
    },

      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Formulaire;