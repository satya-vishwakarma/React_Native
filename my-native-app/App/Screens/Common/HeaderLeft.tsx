import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { SearchBar } from "react-native-elements";
type SearchBarComponentProps = {};
const HeaderLeftScreen: React.FunctionComponent<
  SearchBarComponentProps
> = () => {
  const [search, setState] = useState("");

  const updateSearch: any = (search: any) => {
    setState(search);
    return "sdf";
  };
  return (
    <>
      <View style={styles.container}>
        <View>
          <img
            src="./assets/vecteezy_coffee-cup-in-transparent-background_26497126.png"
            width={50}
            height={50}
          />
        </View>
        <View style={styles.view}>
          <SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            onChangeText={updateSearch}
            value={search}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 5,
  },
  container: {
    flexDirection: "row",
  },
});

export default HeaderLeftScreen;
