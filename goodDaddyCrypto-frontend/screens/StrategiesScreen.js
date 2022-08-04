import React, { useEffect } from "react";

import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

// React Redux
import { connect } from "react-redux";

function StrategiesScreen(props) {
  var getStrategies = async () => {
    console.log(props.userToken);
    var rawResult = await fetch(
      `https://gooddaddybackend.herokuapp.com/investment/getStrategy?userToken=${props.userToken}`
    );
    var result = await rawResult.json();
    console.log(result);
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
          <Text style={{ color: "white", textAlignVertical:"center", marginLeft: 30 }}>200e par mois</Text>
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
