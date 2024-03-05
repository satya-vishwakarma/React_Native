import { Button, View } from "react-native";

import { Text } from "react-native";
import { Card } from "react-native-elements";

import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  const users = [
    {
      name: "brynn",
      avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
    },
    {
      name: "thot leader",
      avatar:
        "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
    },
    {
      name: "jsa",
      avatar: "https://uifaces.co/our-content/donated/bUkmHPKs.jpg",
    },
    {
      name: "talhaconcepts",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "andy vitale",
      avatar: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
    },
    {
      name: "katy friedson",
      avatar:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
    },
  ];

  return (
    <Card
      title={
        <View style={{ justifyContent: "center", height: 610 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                textAlignVertical: "center",
                fontWeight: "bold",
              }}
            >
              12 Mouses
            </Text>
            <View style={{ flexGrow: 1 }} />
            <Button
              buttonStyle={styles.localize}
              icon={
                <Ionicons
                  name="md-locate"
                  color={"black"}
                  size={28}
                  style={{ alignSelf: "center" }}
                />
              }
              onPress={() => {}}
            />
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "grey",
              margin: 2,
            }}
          />
        </View>
      }
      titleStyle={{ textAlign: "left" }}
      containerStyle={{
        width: Dimensions.get("window").width - 25,
        marginTop: Dimensions.get("window").height * 0.5,
        height: 100,
      }}
    ></Card>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#ecf0f1',
  //   padding: 8,
  // },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  localize: {
    padding: 4,
    backgroundColor: "#FF5733",
    borderColor: "#FF5733",
    borderWidth: 2,
    width: Dimensions.get("window").width - 330,
    borderRadius: 10,
    justifyContent: "center",
  },
});

export default HomeScreen;
