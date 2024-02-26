import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        width: "50%",
        alignSelf: "center",
        marginVertical: "10%",
      }}
    >
      <Button
        onPress={() => alert(JSON.stringify({ naem: "sdfs" }))}
        title="getAccessToken"
      />
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
