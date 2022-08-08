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

const strategyProposal = (props) => {
  // INITIALISATION DES ETATS
  const [strategy, setStrategy] = useState([{ amountPaid: 0, frequency: "null", asset: "BTC" }]);

  // FONCTION POUR ENVOYER LA STRATEGIE EN BDD UNE FOIS VALIDEE PAR LE USER
  var addStrategy = async () => {
    var rawResult = await fetch(
      "https://gooddaddybackend.herokuapp.com/investment/addStrategy",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `userToken=${props.userToken}&amountPaid=${strategy[0].amountPaid}&frequency=${strategy[0].frequency}&asset=${strategy[0].asset}`,
      }
    );
    var result = await rawResult.json();
    console.log(result);
  };

  // FONCTION POUR RECUPERER LE TYPE INVESTISSEUR DU USER ET LANCER LE CALCUL DE L'INVESTISSEMENT
  var createStrategy = async () => {
    //initialise les variables
    var salary = props.salary;
    var frequency = "par mois";
    //recupere le type d'investisseur sur le back
    var rawResult = await fetch(
      `https://gooddaddybackend.herokuapp.com/users/getTypeInvestor?userToken=${props.userToken}`
    );
    var result = await rawResult.json();
    //creation de  la  strategie en fonction du type investisseur
    switch (result.typeInvestor) {
        case "INVESTISSEUR DEBUTANT":
          setStrategy([
            { amountPaid: 5*salary/100, frequency: "par mois", asset: "BTC" },
          ]);
          console.log("cas 1");
          break;
        case "INVESTISSEUR DEBUTANT PLUS":
          setStrategy([
            { amountPaid: 10*salary/100, frequency: "par mois", asset: "BTC" },
          ]);
          console.log("cas 2");
          break;
        case "INVESTISSEUR INTERMEDIAIRE":
          setStrategy([
            { amountPaid: 15*salary/100, frequency: "par mois", asset: "BTC" },
            { amountPaid: 5*salary/100, frequency: "par mois", asset: "BTC" }
          ]);
          console.log("cas 3");
          break;
        case "INVESTISSEUR CONFIRME":
          setStrategy([
            { amountPaid: 20*salary/100, frequency: "par mois", asset: "BTC" },
            { amountPaid: 10*salary/100, frequency: "par mois", asset: "ETH" }
          ]);
          break;
          default:
              console.log(`Auncun profil investisseur reconnu`);
        }
  };

  //APPEL FONCTION   A L'INITIALISATION DU COMPONENT
  useEffect(() => {
    createStrategy();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonReturn}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 50,
            width: 120,
            alignItems: "center",
          }}
          onPress={() => props.navigation.navigate("ResultForm")}
        >
          <Icon name="chevron-left" size={20} />
          <Text> RETOUR </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <View>
          <Text style={styles.profilRisque}>
            En fonction de ton profil de risque on te propose d'investir :
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 50 }}>
          <Image
            style={styles.logo}
            source={require("../../assets/Bitcoin.svg.png")}
          />
          <Text
            style={{
              color: "black",
              textAlignVertical: "center",
              marginLeft: 30,
            }}
          >
            {strategy[0].amountPaid}e {strategy[0].frequency}
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              addStrategy();
              props.navigation.navigate("BottomNavigator", {
                screen: "Dashboard",
              });
            }}
            title="ACCEPTER"
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles CSS 🖼
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

// Fonction REDUX
function mapStateToProps(state) {
  return { userToken: state.token, salary: state.salary };
}
export default connect(mapStateToProps, null)(strategyProposal);
