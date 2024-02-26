import React from "react";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./App/Screens/LogingScreen/Login";

export default function App() {



  
  return (

  <View style ={ styles.container}>
    <LoginScreen/>
    </View>
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
