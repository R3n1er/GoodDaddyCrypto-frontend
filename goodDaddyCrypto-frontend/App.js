import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome, Icon } from '@rneui/themed';

// Imports des screens

import  HomeScreen  from './screens/HomeScreen';
import  RegisterScreen  from './screens/RegisterScreen';
import  LoginScreen  from './screens/LoginScreen';
import  DashBoardScreen  from './screens/DashBoardScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

  return(

    <Tab.Navigator 
      screenOptions = {({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if(route.name == 'Strategie') {
            iconName = 'presentation';
          } else if (route.name == 'Dashboard') {
            iconName = 'bitcoin';
          } else if (route.name == 'Guides') {
            iconName = 'webpage';
          } else if (route.name == 'Transactions') {
            iconName = 'c-add';
          }
        
          return <FontAwesome name={iconName} size={25} color={color} />
      },
    })}
    tabBarOptions={{
      activeTintColor: '#eb4d4b',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#130f40',
      }
    }}
>
  <Tab.Screen name='StrategieScreen' component={StrategieScreen} />
  <Tab.Screen name='DashboardScreen' component={DashboardScreen} />
  <Tab.Screen name='GuidesScreen' component={GuidesScreen} />
  <Tab.Screen name='TransactionsScreen' component={TransactionsScreen} />
    </Tab.Navigator>
  )
}



export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
);

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
