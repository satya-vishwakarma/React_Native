import { useFonts } from "expo-font";
import React from "react";
import { Text, View } from "react-native";

const LoginScreen = () => {
  const [fonstsLoaded] = useFonts({
    regular: require("./../../../assets/fonts/Poppins/p"),
  });

  return (
    <View>
      <Text> Login d</Text>
    </View>
  );
};

export default LoginScreen;
