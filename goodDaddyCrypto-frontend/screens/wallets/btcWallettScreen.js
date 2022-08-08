import React, { useEffect, useState } from "react";

import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
// Import React Native Elements
import { Text, Card, Button, Image, Icon } from "@rneui/themed";

// Icones
import Icon from "react-native-vector-icons/FontAwesome";
// React Redux
import { connect } from "react-redux";

const btcWallet = (props) => {
  const assetName = 'Bitcoin';
  const assetSymbol= 'BTC';
  const assetLogo =
    "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_16/f231d7382689406f9a50dde841418c64.png";

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.title}> Wallet {assetName}</View>
      <Card>
        <Card.Title>Prix actuel du {assetName}</Card.Title>
        <Image
          source={
            {assetLogo}
          }
        />
        <Card.Divider />
        <Text>Symbol BTC</Text>
        <Text> Price BTC €</Text>
      </Card>
      {/* // Insert du graphique ici */}
      <View>ICI LA PLACE DU GRAPHIQUE</View>
      {/* // Ici information sur la valeur du portefeuille */}
      <View>
        <Card>
          <Text>Valeur de ton portefeuille {asset}</Text>
          <Text>800 €</Text>
          <Text>soit 0,051 {assetSymbol}</Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

// Styles CSS 🖼
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222121",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  profilRisque: {
    fontSize: 28,
    textAlign: "center",
  },
  buttonReturn: {
    flex: 2,
    justifyContent: "center",
  },
  page: {
    flex: 4,
  },

  logo: {
    width: 50,
    height: 50,
  },
});
