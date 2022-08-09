import React, { useState, useEffect } from "react";

import { StyleSheet, View, Text, Button, ScrollView } from "react-native";

import { connect } from "react-redux";

function DashBoardScreen(props) {
  const [operations, setOperations] = useState([]);
  const [totalInvestmentAsset, setTotalInvestmentAsset] = useState(0);
  const [totalInvestmentDollar, setTotalInvestmentDollar] = useState(0);

  useEffect(() => {
    async function fetchData() {
      var rawResult = await fetch(
        `https://gooddaddybackend.herokuapp.com/operation/getOperation?userToken=${props.userToken}`
      );
      var result = await rawResult.json();
      console.log(result);
      setOperations(result.operations);

      var totalAsset = 0;
      var totalDollar = 0;
      for (let i = 0; i < result.operations.length; i++) {
        if (result.operations[i].typeOperation == "CREDIT") {
          totalAsset += result.operations[i].amountOfToken;
          totalDollar += result.operations[i].amountPaid;
        } else if (result.operations[i].typeOperation == "DEBIT") {
          totalAsset -= result.operations[i].amountOfToken;
          totalDollar -= result.operations[i].amountPaid;
        } else [console.log("Type operation inconnu")];
      }
      setTotalInvestmentAsset(totalAsset);
      setTotalInvestmentDollar(totalDollar);
      console.log(totalAsset);
      console.log(totalDollar);
    }
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ color: "white" }}>DASHBOARD</Text>
      <Text style={{ color: "white" }}>
        Investissement total : {totalInvestmentDollar} $ {totalInvestmentAsset}{" "}
        BTC
      </Text>
      <Button
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("WalletBtc");
        }}
        title="WALLET BTC"
      ></Button>
      <Button
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("WalletEth");
        }}
        title="WALLET ETH"
      ></Button>
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

function mapStateToProps(state) {
  return { userToken: state.token };
}

export default connect(mapStateToProps, null)(DashBoardScreen);
