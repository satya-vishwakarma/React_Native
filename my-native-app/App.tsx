import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./App/Screens/HomeScreen/Home";
import ProfileScreen from "./App/Screens/ProfileScreen/Profile";
import SettingScreen from "./App/Screens/SettingsScreen/Settings";
//import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { Ionicons } from "@expo/vector-icons";
import HeaderLeftScreen from "./App/Screens/Common/HeaderLeft";
import HeaderRightScreen from "./App/Screens/Common/HeaderRight";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerLeft: () => <HeaderLeftScreen />,
          headerRight: () => <HeaderRightScreen />,
          headerStyle: {
            // backgroundColor: "yellow",
          },
          headerTitle: "",
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Settings") {
              iconName = "settings-outline";
            } else if (route.name === "Profile") {
              iconName = "person-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "",
          }}
        />

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
