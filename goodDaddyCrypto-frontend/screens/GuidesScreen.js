import React, { useEffect, useState } from "react";

import { Card, Paragraph } from "react-native-paper";

import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const guidesProposal = (props) => {
  // INITIALISATION DES ETATS
  const [guide, setGuide] = useState([]);

  // FONCTION POUR RECUPERER L'ENSEMBLE DES ARTICLES DE GUIDES
  var getGuide = async () => {
    var rawResult = await fetch(
      "https://gooddaddybackend.herokuapp.com/guide/getGuide"
    );
    var result = await rawResult.json();
    setGuide(result.guides);
    console.log(result);
  };

  useEffect(() => {
    getGuide();
  }, []);

  let guideToDisplay = guide.map((guide, i) => {
    return (
      <Card key={i} style={{ backgroundColor: "#222121", marginTop: 20, borderRadius:10,borderColor:"white", borderWidth:0.2 }}>
        <Card.Title
          title={<Text style={{ color: "white" }}>{guide.title}</Text>}
        />
        <View style={{height:1,width:'50%',backgroundColor:"white",marginLeft:'10%',marginBottom:10}}></View>
        <Card.Content>
          <Paragraph style={{ color: "white" }}>{guide.content}</Paragraph>
          <View style={{flexDirection:"row", justifyContent:"space-around", marginTop: 20}}>
            <Text style={{ color: "white", fontStyle:"italic" }}>Auteur: {guide.author}</Text>
            <Text style={{ color: "white", fontStyle:"italic" }}>
              Publié le: {guide.dateRelease}
            </Text>
          </View>
        </Card.Content>
        {/* <Card.Cover source={guide.image} /> */}
      </Card>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#1A0596", "transparent"]}
        style={styles.background}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#222121",
            minWidth: 700,
            maxHeight: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            GUIDES
          </Text>
        </View>
        <ScrollView>
          <View style={{ width: 350 }}>{guideToDisplay}</View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

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
  },
  background: {
    flex: 6,
    resizeMode: "cover",
    alignItems: "center",
    minWidth: "100%",
  },
});

export default guidesProposal;
