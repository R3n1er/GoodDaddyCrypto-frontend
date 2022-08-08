import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
// Icones
import Icon from "react-native-vector-icons/FontAwesome";
// React Redux
import { connect } from "react-redux";

const btcWallet = (props) => {
  const asset = BTC;

  return (
    <SafeAreaView>
      <View>
        <Text>Prix actuel du {asset}</Text>
        <Text>
          <Image
            source={
              "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_16/f231d7382689406f9a50dde841418c64.png"
            }
          />
          Bitcoin
        </Text>
        <Text>Symbol BTC</Text>
        <Text> Price BTC $</Text>
      </View>
{/* // Insert du graphique ici */}
      <View>ICI LA PLACE DU GRAPHIQUE</View>
      {/* // Ici information sur la valeur du portefeuille */}
      <View>
        <Text>Valeur de ton portefeuille {asset} : 800 €</Text>
      </View>
    </SafeAreaView>
  );
};

export default btcWallet;