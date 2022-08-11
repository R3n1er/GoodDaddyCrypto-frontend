import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  LineChart
} from "react-native-chart-kit";
import { connect } from "react-redux";

function DashBoardScreen(props) {
  const [operations, setOperations] = useState([]);
  const [totalInvestmentAsset, setTotalInvestmentAsset] = useState(0);
  const [totalInvestmentEuro, setTotalInvestmentEuro] = useState(0);
  const [bitcoinToEuroToday, setBitcoinToEuroToday] = useState(0);
  const [tabPerf, setTabPerf] = useState([]);
  const [timeInterval, setTimeInterval] = useState(7);

  //INITIALISATION COMPONENT
  useEffect(() => {
    async function getOperations() {
      var rawResult = await fetch(
        `https://gooddaddybackend.herokuapp.com/operation/getOperation?userToken=${props.userToken}`
      );
      var result = await rawResult.json();
      setOperations(result.operations);
      var totalAsset = 0;
      var totalEuro = 0;
      for (let i = 0; i < result.operations.length; i++) {
        if (result.operations[i].typeOperation == "CREDIT") {
          totalAsset += result.operations[i].amountOfToken;
          totalEuro += result.operations[i].amountPaid;
        } else if (result.operations[i].typeOperation == "DEBIT") {
          totalAsset -= result.operations[i].amountOfToken;
          totalEuro -= result.operations[i].amountPaid;
        } else {
          console.log("Type operation inconnu");
        }
      }
      setTotalInvestmentAsset(totalAsset);
      setTotalInvestmentEuro(totalEuro);
      createTab(timeInterval, result.operations);
    }
    //recupere le prix actuel du BTC
    async function getBitcoinToEuro() {
      var rawResult = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur`
      );
      var result = await rawResult.json();
      setBitcoinToEuroToday(result.bitcoin.eur);
    }
    getOperations();
    getBitcoinToEuro();
  }, []);

  //PREPARATION TABLEAU DU GRAPH
  async function createTab(timeInterval, opeTab) {
    // recupere la date du jour et la met au bon format
    var todayDate = new Date().setUTCHours(0, 0, 0, 0);
    todayDate = new Date(todayDate).toISOString();
    var tab = [];
    var rawResult = await fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=${timeInterval}&interval=daily`
    );
    var result = await rawResult.json();
    var prices = result.prices;
    // remplit tab avec le nbr de date dans l'interval demandé ( 7 jours, 30 jours, 365 jours)
    for (let i = 0; i < timeInterval; i++) {
      var totalEuro = 0;
      var todayTotalBTC = 0;
      //parcout tableau operations
      for (let j = 0; j < opeTab.length; j++) {
        // la date de l'operation est plus ancienne que la date a tester
        if (Date.parse(opeTab[j].date) <= Date.parse(todayDate)) {
          //si l'opération est un credit, on ajoute les montants au total
          if (
            (opeTab[j].typeOperation == "CREDIT") &
            (opeTab[j].asset == "BTC")
          ) {
            todayTotalBTC += opeTab[j].amountOfToken;
            totalEuro += opeTab[j].amountPaid;
          }
          // si l'opération est un debit,on retire les montants du total
          else if (
            (opeTab[j].typeOperation == "DEBIT") &
            (opeTab[j].asset == "BTC")
          ) {
            todayTotalBTC -= opeTab[j].amountOfToken;
            totalEuro -= opeTab[j].amountPaid;
          }
        }
      }
      //calcul de la performance et push dans le tableau
      if (totalEuro != 0)
        var performance =
          ((todayTotalBTC * prices[i][1] - totalEuro) * 100) / totalEuro;
      else {
        var performance = 0;
      }
      tab.push([new Date(todayDate), performance]);

      //retire 1 jour a la date pour le prochain passage de boucle
      var newDate = new Date(todayDate).getDate() - 1;
      newDate = new Date(todayDate).setDate(newDate);
      todayDate = new Date(newDate).toISOString();
    }
    setTabPerf(tab);
  }
  //INITIALISATION DU GRAPH
  var graph = function () {
    console.log(tabPerf);
    //remplit dataSet/label avec les dates et les perfs de tabPerf
    var labelTab = [];
    var dataSet = [];
    for (let i = 0; i < tabPerf.length; i++) {
      var date = new Date(tabPerf[i][0]);
      labelTab.push(date.getDate() + "/" + date.getMonth());
      dataSet.push(tabPerf[i][1]);
    }
    labelTab.reverse();
    dataSet.reverse();
    //renvoit le graphique
    return (
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: labelTab,
            datasets: [
              {
                data: dataSet,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisSuffix="%"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#222121",
            backgroundGradientFrom: "#222121",
            backgroundGradientTo: "#222121",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ color: "white" }}>DASHBOARD</Text>

      <View style={{ flexDirection: "row" }}>
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
      </View>
      <Text style={{ color: "white" }}>
        total asset possédé : {totalInvestmentAsset} BTC
      </Text>
      <Text style={{ color: "white" }}>
        valeur du portefeuille : {totalInvestmentAsset * bitcoinToEuroToday} e
      </Text>
      <Text style={{ color: "white" }}>Investi : {totalInvestmentEuro} e</Text>
      <Text style={{ color: "white" }}>
        Gain: {totalInvestmentAsset * bitcoinToEuroToday - totalInvestmentEuro}{" "}
        e
      </Text>
      <Text style={{ color: "white" }}>
        Performance:{" "}
        {Math.round(
          ((totalInvestmentAsset * bitcoinToEuroToday - totalInvestmentEuro) *
            100) /
            totalInvestmentEuro
        )}{" "}
        %
      </Text>
      {tabPerf.length != 0 ? graph(): null }
      <View style={{ flexDirection: "row" }}>
        <Button
          style={styles.button}
          onPress={() => {
            setTimeInterval(7);
          }}
          title="1W"
        ></Button>
        <Button
          style={styles.button}
          onPress={() => {
            setTimeInterval(30);
          }}
          title="1M"
        ></Button>
        <Button
          style={styles.button}
          onPress={() => {
          }}
          title="1Y"
        ></Button>
      </View>
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
    marginRight: 20,
  },
});

function mapStateToProps(state) {
  return { userToken: state.token };
}

export default connect(mapStateToProps, null)(DashBoardScreen);
