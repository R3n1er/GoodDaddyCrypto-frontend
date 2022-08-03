import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
const Separator = () => <View style={styles.separator} />;

const Formulaire = () => {
  const [checked, setChecked] = React.useState("first");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.profilRisque}>
            Déterminer ton profil de risque
          </Text>
          <Separator />
          <Text style={styles.title}>
            Pour un investissement intial de{" "}
            <span style={{ fontWeight: "bold" }}>1000€</span>, quel perte
            maximale peux-tu accepter ?
          </Text>
          <Separator />
        </View>
        // Container View Gauche
        <View>
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Text style={styles.label}>100 €</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Text style={styles.label}>200 €</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.checkboxContainer}>
              <RadioButton
                value="third"
                status={checked === "third" ? "checked" : "unchecked"}
                onPress={() => setChecked("third")}
              />
              <Text style={styles.label}>300 €</Text>
            </View>
          </View>
        </View>
        // View Container droite
        <View></View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <RadioButton
              value="fourth"
              status={checked === "fourth" ? "checked" : "unchecked"}
              onPress={() => setChecked("fourth")}
            />
            <Text style={styles.label}>400 €</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <RadioButton
              value="fifth"
              status={checked === "fifth" ? "checked" : "unchecked"}
              onPress={() => setChecked("fifth")}
            />
            <Text style={styles.label}>500 €</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <RadioButton
              value="sixth"
              status={checked === "sixth" ? "checked" : "unchecked"}
              onPress={() => setChecked("sixth")}
            />
            <Text style={styles.label}>600 €</Text>
          </View>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

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
