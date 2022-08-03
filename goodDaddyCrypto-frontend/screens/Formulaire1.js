// PAGE 222222222

import React from 'react';
import {StyleSheet, Text, View, Button, Alert, SafeAreaView, TouchableOpacity} from 'react-native';

// SÉPARATEUR LIGNE

const Separator = () => (
    <View style={styles.separator} />
  );


const Formulaire = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.profilRisque}>
                    Détermination de ton profil de risque
                </Text>
                <Separator />
                <Text style={styles.title}>
                    Quel est ton niveau en connaissances Crypto ?
                </Text>
                <Separator />
            </View>
            <View>
                <TouchableOpacity>
                <Text style={styles.answer}>
                    Option 1 
                </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={styles.answer}>
                    Option 2 
                </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={styles.answer}>
                    Option 3 
                </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={styles.answer}>
                    Option 4
                </Text>
                </TouchableOpacity>

                <Button
                title="SUIVANT"
                onPress={() => Alert.alert('testclick')}
              />
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    profilRisque: {
      fontSize: 28,
      textAlign: 'center',
    },
      title: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 8,
    },
    answer: {
      textAlign: 'center',
      marginVertical: 8,
      fontSize: 16,
      backgroundColor: 'yellow',
      borderRadius: 12,
    },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Formulaire;


