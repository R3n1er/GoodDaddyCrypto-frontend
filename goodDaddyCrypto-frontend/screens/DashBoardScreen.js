import React, {useState,useEffect} from "react";
// Import de librairie ui-neumorphism

import { StyleSheet, View, Text, Button, ScrollView } from "react-native";

// Import du CSS correspondant à ui-neumorphism

export default function DashBoardScreen() {
  const [totalInvestment, setTotalInvestment] = useState(0);

  useEffect(async () => {
    console.log(props.userToken);
    var rawResult = await fetch(
      `https://gooddaddybackend.herokuapp.com/investment/getStrategy?userToken=${props.userToken}`
    );
    var result = await rawResult.json();
    console.log(result);
    setStrategies(result.strategies)
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>DASHBOARD</Text>
      <Text>Investissement total : {totalInvestment}</Text>
      <Button
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("WalletBtc")
          }}
          title="WALLET BTC"
        >
        </Button>
        <Button
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("WalletEth")
          }}
          title="WALLET ETH"
        >
        </Button>
    </ScrollView>
  );
}

// Style CSS 🎨
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222121",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  textTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "50",
  },

  text: {
    color: "white",
    fontSize: "20",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});
