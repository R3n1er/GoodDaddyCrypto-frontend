import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// Import React Native Elements
import { Text, Card, Button, Image } from "@rneui/themed";

import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";

// Icones
import Icon from "react-native-vector-icons/FontAwesome";
// React Redux
import { connect } from "react-redux";

// AXIOS pour requette API
import axios from "axios";

//// **********DEBUT CREATION DU COMPOSANT***********
const btcWallet = (props) => {
  // Declaration variable d'etat pour afficher le current price
  const [showprice, setShowPrice] = useState(0);

  // Declaration variable d'etat pour récupérer le prix en fonction de la période d'intervalle sellectionnée
  const [getPricePeriod, setPricePeriod] = useState(null);

  // Declaration de variables
  const assetName = "Bitcoin";
  const assetSymbol = "BTC";
  const cryptoAssetId = "bitcoin";
  const assetLogo =
    "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_16/f231d7382689406f9a50dde841418c64.png";

  // UseEffect for Show Bitcoin Price
  useEffect(() => {
    // ********Fonction pour récupérer le prix d'un asset avec API Coingecko***********
    async function getCryptoPriceData() {
      try {
        // This is where the api call will go
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoAssetId}&vs_currencies=eur`
        );
        // Gestion du success
        // Retour de la fonction
        console.log("typeof response", typeof response.data.bitcoin.eur);

        setShowPrice(response.data.bitcoin.eur);
      } catch (err) {
        console.log(err);
      }
    }
    getCryptoPriceData();
  }, []);

  // Use Effect for getPriceInterval
  useEffect(() => {});

  // ***********Fonction pour affichage du graphique**************

  const { width: SIZE } = Dimensions.get("window");
  const data = [
    { x: 1453075200, y: 1.47 },
    { x: 1453161600, y: 1.37 },
    { x: 1453248000, y: 1.53 },
    { x: 1453334400, y: 1.54 },
    { x: 1453420800, y: 1.52 },
    { x: 1453507200, y: 2.03 },
    { x: 1453593600, y: 2.1 },
    { x: 1453680000, y: 2.5 },
    { x: 1453766400, y: 2.3 },
    { x: 1453852800, y: 2.42 },
    { x: 1453939200, y: 2.55 },
    { x: 1454025600, y: 2.41 },
    { x: 1454112000, y: 2.43 },
    { x: 1454198400, y: 2.2 },
  ];

  const points = monotoneCubicInterpolation({ data, range: 40 });

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
          1 {assetSymbol} = {showprice} €
        </Text>
      </Card>
      {/* // Insert du graphique ici 
      Le graphique doit afficher l'évolution du portefeuille dans le temps en fonction de amount of token et price$*/}
      <View style={{ backgroundColor: "black" }}>
        <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
          <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
          <ChartDot style={{ backgroundColor: "blue" }} />
        </ChartPathProvider>
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
