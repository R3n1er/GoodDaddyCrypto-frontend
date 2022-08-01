import { StyleSheet, Text, View } from 'react-native';

// Import React Native elements
import { FontAwesome, Icon } from '@rneui/themed';

// Imports des screens
import  HomeScreen  from './screens/HomeScreen';

import  DashboardScreen  from './screens/DashBoardScreen';
import GuidesScreen from './screens/GuidesScreen';
import StrategieScreen from './screens/StrategieScreen';
import TransactionsScreen from './screens/TransactionsScreen';


//Imports de la navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Création du composant BottomTabNavigator
const BottomNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          // Routes des éléments du menu
          if (route.name == "Strategie") {
            iconName = "presentation";
          } else if (route.name == "Dashboard") {
            iconName = "bitcoin";
          } else if (route.name == "Guides") {
            iconName = "webpage";
          } else if (route.name == "Transactions") {
            iconName = "c-add";
          }
          //Fonction de retour des icones de menu
          return <FontAwesome name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#00b295",
        inactiveTintColor: "#f433ab",
        style: {
          backgroundColor: "#222121",
        },
      }}
    >
      <Tab.Screen name="StrategieScreen" component={StrategieScreen} />
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      <Tab.Screen name="GuidesScreen" component={GuidesScreen} />
      <Tab.Screen name="TransactionsScreen" component={TransactionsScreen} />
    </Tab.Navigator>
  );
}

// on peut créer une page dans stratégie avec une fonction stratégie

// Début return fonction App
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

// Styles CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
