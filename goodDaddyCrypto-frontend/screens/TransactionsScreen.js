import React, { useState, useEffect } from "react";
// Import de librairie ui-neumorphism

import {
  Button,
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  SafeAreaView,
  ScrollView
} from "react-native";

import { Dropdown } from "react-native-element-dropdown";
import { Card } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { connect } from "react-redux";

function TransactionsScreen(props) {
  // ETAT POUR STOCKER LES OPERATIONS
  const [operations, setOperations] = useState([]);
  //ETATS POUR CHAMPS SAISIE D'UNE NOUVELLE OPERATION/AFFICHER LA MODALE
  const [modalVisible, setModalVisible] = useState(false);
  const [amountOfToken, setAmountOfToken] = useState("");
  const [amountPaid, setAmountPaid] = useState("");

  // ETATS POUR DATE PICKER
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  //ETATS POUR DROPDOWN POUR CHOISIR ASSETS
  const [asset, setAsset] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const dataDropdown = [
    { label: "Bitcoin", value: "BTC" },
    { label: "Ethereum", value: "ETH" },
  ];
  //ETATS POUR DROPDOWN POUR CHOISIR TYPE OPERATION
  const [typeOperation, setTypeOperation] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const dataDropdown2 = [
    { label: "Debit", value: "DEBIT" },
    { label: "Credit", value: "CREDIT" },
  ];

  // RECUPERE LES OPERATIONS A L'INITIALISATION DU SCREEN
  useEffect(() => {
    getOperations();
  }, []);

  async function getOperations() {
    var rawResult = await fetch(
      `https://gooddaddybackend.herokuapp.com/operation/getOperation?userToken=${props.userToken}`
    );
    var result = await rawResult.json();
    setOperations(result.operations);
  }
  //AFFICHAGE DES OPERATIONS VIA UN TABLEAU DE CARDS
  var operationsList = operations.map((ope, i) => {
    return (
      <Card title="HELLO WORLD" key={i} style={{ backgroundColor: "black" }}>
        <View
          style={{
            flexDirection: "column",
            marginBottom: 20,
            backgroundColor: "black",
          }}
        >
          <Text style={styles.text}>Date : {ope.date}</Text>
          <Text style={styles.text}>Type Operation : {ope.typeOperation}</Text>
          <Text style={styles.text}>
            Quantité Asset echangée : {ope.amountOfToken}
          </Text>
          <Text style={styles.text}>
            Quantité dollar echangée: {ope.amountPaid}
          </Text>
        </View>
      </Card>
    );
  });

  const addOperation = async () => {
    var rawResult = await fetch(
      "https://gooddaddybackend.herokuapp.com/operation/addOperation",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `userToken=${props.userToken}&date=${date}&typeOperation=${typeOperation}&amountOfToken=${amountOfToken}&amountPaid=${amountPaid}&asset=${asset}`,
      }
    );
    var result = await rawResult.json();
    getOperations();
  };

  // FONCTIONS POUR LE DATE PICKER
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
    }
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
    setShow(true);
  };

  return (
    
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Modal
        animationType="slide"
        style={styles.centeredView}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>AJOUTER UNE OPERATION</Text>
            <View>
              <Button onPress={showDatepicker} title={date.toLocaleString()} />
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </View>
            <Dropdown
              style={[styles.dropdown, isFocus2 && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={dataDropdown2}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus2 ? "Type operation" : "..."}
              value={typeOperation}
              onFocus={() => setIsFocus2(true)}
              onBlur={() => setIsFocus2(false)}
              onChange={(item) => {
                setTypeOperation(item.value);
                setIsFocus2(false);
              }}
            />
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={dataDropdown}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Choisir un asset" : "..."}
              value={asset}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setAsset(item.value);
                setIsFocus(false);
              }}
            />
            <TextInput
              style={styles.input}
              onChangeText={setAmountOfToken}
              value={amountOfToken.toString()}
              placeholder="Amount of tokens traded"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={setAmountPaid}
              value={amountPaid.toString()}
              placeholder="Amount of dollars traded"
              keyboardType="numeric"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                addOperation();
                setAsset(null);
                setDate(new Date());
                setAmountOfToken("");
                setAmountPaid("");
                setTypeOperation(null);
              }}
            >
              <Text style={styles.textStyle}>CONFIRMER</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Text
        style={{
          color: "white",
        }}
      >
        TRANSACTIONS
      </Text>
      {operationsList}
    </ScrollView>
      <Button
        style={styles.button}
        onPress={() => {
          setModalVisible(true);
        }}
        title="AJOUTER OPERATION"
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222121",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlignVertical: "center",
    marginLeft: 30,
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
  modalView: {
    margin: 20,
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dropdown: {
    height: 50,
    width: 180,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

function mapStateToProps(state) {
  return { userToken: state.token };
}

export default connect(mapStateToProps, null)(TransactionsScreen);
