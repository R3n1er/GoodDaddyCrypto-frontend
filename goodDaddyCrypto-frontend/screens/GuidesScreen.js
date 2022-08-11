import React, { useEffect, useState } from "react";

import { Card , Paragraph} from 'react-native-paper';

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
// Icones
import Icon from "react-native-vector-icons/FontAwesome";
// React Redux
import { connect } from "react-redux";



const guidesProposal = (props) => {
  // INITIALISATION DES ETATS
  const [guide, setGuide] = useState([]);

  // FONCTION POUR RECUPERER L'ENSEMBLE DES ARTICLES DE GUIDES
  var getGuide = async () => {
    var rawResult = await fetch(
      "https://gooddaddybackend.herokuapp.com/guide/getGuide"
    );
    var result = await rawResult.json();
    setGuide(result.guides)
    console.log(result);
};

useEffect(()=>{
  getGuide()
},[])

let guideToDisplay = guide.map((guide,i)=>{
  return (
    <Card key={i}>
              <Card.Title title={guide.title} />
                <Card.Content>
                  <Paragraph>{guide.content}</Paragraph>
                  <Text>Auteur: {guide.author} / Publié le: {guide.dateRelease}</Text>
                </Card.Content>
              {/* <Card.Cover source={guide.image} /> */}
            </Card>
  )
})

return (

    <SafeAreaView>
        <ScrollView>
          <View>
            <Text> Liste des Guides</Text>
          </View>
          <View>
            
            {guideToDisplay}
    
          </View>
        </ScrollView>
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
});

// Fonction REDUX
// function mapStateToProps(state) {
//   return { title: guide.title, content: guide.content, author: guide.author, dataRelease: guide.dateRelease, image: guide.image };
// }
export default connect(null, null)(guidesProposal);
