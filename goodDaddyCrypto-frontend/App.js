import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreen } from './screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";






const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

  return(

    <Tab.Navigator 
      screenOptions = {({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if(route.name == 'Map') {
            iconName = 'ios-navigate';
          } else if (route.name == 'Chat') {
            iconName = 'ios-chatbubbles';
          }
        
          return <Ionicons name={iconName} size={25} color={color} />
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
  <Tab.Screen name='RegisterScreen' component={RegisterScreen} />
  <Tab.Screen name='LoginScreen' component={LoginScreen} />
  <Tab.Screen name='DashBoardScreen' component={DashBoardScreen} />
    </Tab.Navigator>

  )
}



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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
