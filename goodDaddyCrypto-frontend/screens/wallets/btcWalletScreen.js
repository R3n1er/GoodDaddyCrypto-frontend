import React, { useEffect, useState } from "react";

import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
// Import React Native Elements
import { Text, Card, Button, Image } from "@rneui/themed";

// Import de la fonction GetCrypto Current Price
import {getCryptoPriceData} from '../../services/GetCryptoPriceService';

// Icones
import Icon from "react-native-vector-icons/FontAwesome";
// React Redux
import { connect } from "react-redux";

// import {walletChart} from "../../Components/walletChart";

import axios from "axios";


const btcWallet = (props) => {
  const assetName = "Bitcoin";
  const assetSymbol = "BTC";
  const cryptoAssetId = "bitcoin";
  const assetLogo = "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_16/f231d7382689406f9a50dde841418c64.png"

  // Fonction pour récupérer le prix d'un asset avec API Coingecko
  const getCryptoPriceData = async () => {
    try {
      // This is where the api call will go
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoAssetId}&vs_currencies=usd`
      );
      // Gestion du success
      console.log(response);
      return response.bitcoin.us;
    } catch (error) {
      // gestion des erreurs
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>Wallet {assetName}</Text>
      </View>
      <Card>
        <Card.Title>Prix actuel du {assetName}</Card.Title>
        <Image source={{ assetLogo }} />
        <Card.Divider />
        {/*//get current Price of asset with API */}
        <Text>
          1 {assetSymbol} = {getCryptoPriceData}
        </Text>
      </Card>
      {/* // Insert du graphique ici 
      Le graphique doit afficher l'évolution du portefeuille dans le temps en fonction de amount of token et price$*/}
      <View>
        <Text>ICI LA PLACE DU GRAPHIQUE</Text>
        {/* <walletChart /> */}
      </View>
      {/* // Ici information sur la valeur du portefeuille */}
      <View>
        <Card>
          <Text>Valeur de ton portefeuille {assetName}</Text>
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

export default btcWallet;
