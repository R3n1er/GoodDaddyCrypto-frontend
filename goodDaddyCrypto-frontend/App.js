import { StyleSheet, Text, View, Icon } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Imports des screens
import HomeScreen from "./screens/HomeScreen";
import DashboardScreen from "./screens/DashBoardScreen";
import GuidesScreen from "./screens/GuidesScreen";
import StrategiesScreen from "./screens/StrategiesScreen";
import TransactionsScreen from "./screens/TransactionsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

//Imports de la navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
          // Routes des éléments du menu en correspondance avec les icones FontAwesome
          if (route.name == "StrategiesScreen") {
            iconName = "clipboard-check";
          } else if (route.name == "DashboardScreen") {
            iconName = "bitcoin";
          } else if (route.name == "GuidesScreen") {
            iconName = "newspaper";
          } else if (route.name == "TransactionsScreen") {
            iconName = "plus-circle";
          }
          //Fonction de retour des icones de menu
          return <FontAwesomeIcon icon={iconName} size={25} color={color} />;
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
      <Tab.Screen name="Strategies" component={StrategiesScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Guides" component={GuidesScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );
};

// on peut créer une page dans stratégie avec une fonction stratégie

// Début return fonction App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Good Daddy Crypto" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
