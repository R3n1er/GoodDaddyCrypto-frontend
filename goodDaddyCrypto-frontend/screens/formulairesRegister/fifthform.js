import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import { connect } from "react-redux";
// Import Icon FontAwesome
import Icon from "react-native-vector-icons/FontAwesome";

const Separator = () => <View style={styles.separator} />;

const FifthForm = (props) => {
  const [incomes, setIncomes] = useState(0);
  const [salary, setSalary] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#1A0596', 'transparent']}
        style={styles.background}
      >
      <View style={styles.buttonReturn}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 50,
            width: 120,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("FourthForm")}
        >
          <Icon name="chevron-left" size={20} />
          <Text style={{color: '#E335DC'}}> RETOUR </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
        style={{flex: 5}}
      >
        <View style={styles.page}>
          <Text style={styles.profilRisque}>Demande des gains mensuels</Text>
          <Separator />
          <Text style={styles.title}>QUEL EST TON SALAIRE NET ?</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={setSalary}
              value={salary.toString()}
              placeholder="SALAIRE"
              keyboardType="numeric"
            />
            <Text style={styles.txtEuro}>€</Text>
          </View>
          <Separator />
          <Text style={styles.title}>
            AVEZ-VOUS DES REVENUS COMPLÉMENTAIRES ?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <TextInput
            style={styles.input}
            onChangeText={setIncomes}
            value={incomes.toString()}
            placeholder="REVENUS"
            keyboardType="numeric"
          />
          <Text style={styles.txtEuro}>€</Text>
          </View>
          <Separator />
        </View>
        <Button
            onPress={() => {
              props.navigation.navigate("ResultForm");
              props.addSalary(parseInt(salary) + parseInt(incomes));
            }}
            title="Confirmer"
          ></Button>

      </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222121",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  profilRisque: {
    fontSize: 28,
    textAlign: "center",
    color: "white",
    marginBottom: 45,
  },
  page: {
  },
  txtEuro: {
    color: 'white',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    color: 'white',
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 8,
    color: "white",
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonReturn: {
    flex: 1,
    justifyContent: "center",
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addSalary: function (salary) {
      console.log(salary);
      dispatch({
        type: "addSalary",
        salary: salary,
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(FifthForm);
