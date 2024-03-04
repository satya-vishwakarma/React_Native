import React from "react";
import { StyleSheet } from "react-native";


import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./App/Screens/LogingScreen/Login";
import HomeScreen from "./App/Screens/HomeScreen/Home";
import SettingScreen from "./App/Screens/SettingsScreen/Settings";
import ProfileScreen from "./App/Screens/ProfileScreen/Profile";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
     
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
