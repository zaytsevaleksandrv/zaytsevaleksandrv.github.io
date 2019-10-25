import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>люблю Иришку!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text: {
    color: "white"
  }
});
