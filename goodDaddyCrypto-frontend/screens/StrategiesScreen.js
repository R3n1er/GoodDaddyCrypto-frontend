import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

// React Redux
import { connect } from "react-redux";

function StrategiesScreen(props) {

  //initialisations des etats
  const [amountPaid, setAmountPaid] =  useState(0);
  const [frequency, setFrequency] = useState("par mois");


  var getStrategies = async () => {
    console.log(props.userToken);
    var rawResult = await fetch(
      `https://gooddaddybackend.herokuapp.com/investment/getStrategy?userToken=${props.userToken}`
    );
    var result = await rawResult.json();
    console.log(result);
    setAmountPaid(result.strategies[0].amountPaid);
    setFrequency(result.strategies[0].frequency);
  };

  useEffect(() => {
    getStrategies();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={{flexDirection:"row"}}>
          <Image
            style={styles.logo}
            source={require("../assets/Bitcoin.svg.png")}
          />
          <Text style={{ color: "white", textAlignVertical:"center", marginLeft: 30 }}>{amountPaid}e {frequency}</Text>
        </View>
      </View>
      <View></View>
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
  }
});

function mapStateToProps(state) {
  return { userToken: state.token };
}

export default connect(mapStateToProps, null)(StrategiesScreen);
