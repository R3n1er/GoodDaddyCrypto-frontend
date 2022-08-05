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
} from "react-native";

import { connect } from "react-redux";
import ProgressBar from "../../Components/ProgressBar";
// Import Icon FontAwesome
import Icon from "react-native-vector-icons/FontAwesome";

const Separator = () => <View style={styles.separator} />;

const FifthForm = (props) => {
  const [incomes, setIncomes] = useState(0);
  const [salary, setSalary] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
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
          <Text> RETOUR </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
        style={{flex: 5}}
      >
        <View>
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
              value={salary}
              placeholder="SALAIRE"
              keyboardType="numeric"
            />
            <Text>€</Text>
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
            value={incomes}
            placeholder="REVENUS"
            keyboardType="numeric"
          />
          <Text>€</Text>
          </View>
          <Separator />
          <Button
            onPress={() => {
              props.navigation.navigate("ResultForm");
              props.addSalary(parseInt(salary) + parseInt(incomes));
            }}
            title="Confirmer"
          ></Button>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  profilRisque: {
    fontSize: 28,
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 8,
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
