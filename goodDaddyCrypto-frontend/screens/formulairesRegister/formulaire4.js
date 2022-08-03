import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

// Import React Native Elements
import { Input } from "@rneui/themed";
import { Button } from "@rneui/base";
import { ScrollView } from "react-native-gesture-handler";

const Separator = () => <View style={styles.separator} />;

const Formulaire = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.profilRisque}>
          Détermination de ton profil de risque
        </Text>
        <Separator />
        <Text style={styles.title}>
          Tu as investis un capital de départ de{" "}
          <span style={{ fontWeight: "bold" }}>1000€</span> sur le Bitcoin ₿.
          Sur une période d'un mois, le Bitcoin perd{" "}
          <span style={{ fontWeight: "bold" }}>45%</span>
          de sa valeur.<span style={{ fontWeight: "bold" }}>Que fais-tu ?</span>
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

        <TouchableOpacity>
          <Text style={styles.answer}>Option 4</Text>
        </TouchableOpacity>

        <Button title="SUIVANT" onPress={() => Alert.alert("testclick")} />
      </View>
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
