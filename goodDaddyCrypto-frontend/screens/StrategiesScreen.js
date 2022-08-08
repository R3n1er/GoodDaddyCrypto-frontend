import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

// React Redux
import { connect } from "react-redux";

function StrategiesScreen(props) {
  //initialisations des etats
  const [strategies, setStrategies] = useState([]);

  // RECUPERE LES STRATEGIES A L'INITIALISATION DU SCREEN
  useEffect(async () => {
    console.log(props.userToken);
    var rawResult = await fetch(
      `https://gooddaddybackend.herokuapp.com/investment/getStrategy?userToken=${props.userToken}`
    );
    var result = await rawResult.json();
    console.log(result);
    setStrategies(result.strategies)
  }, []);

  var strategiesList = strategies.map((strat, i) => {
    var assetLogo = "";
    if (strat.asset == "BTC") {
      assetLogo = require("../assets/Bitcoin.svg.png")
    }
    else if (strat.asset == "ETH") {
      assetLogo = require("../assets/ethereum.png")
    }
    return (
      <View 
      key={i} style={{ flexDirection: "row",marginBottom: 20 }}>
      <Image
        style={styles.logo}
        source={assetLogo}
      />
      <Text
        style={{
          color: "white",
          textAlignVertical: "center",
          marginLeft: 30,
        }}
      >
        {strat.amountPaid}e {strat.frequency}
      </Text>
    </View>
  );
});

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>{strategiesList}</View>
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
  logo: {
    width: 50,
    height: 50,
  },
});

function mapStateToProps(state) {
  return { userToken: state.token };
}

export default connect(mapStateToProps, null)(StrategiesScreen);
