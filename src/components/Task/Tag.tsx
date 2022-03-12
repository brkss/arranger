import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Tag: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>ACTIVE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: "#1600FF",
    position: "absolute",
    top: 5,
    right: 5,
    paddingHorizontal: 5,
  },
  txt: {
    marginTop: -2,
    color: "#E4E4E4",
    fontFamily: "condesed",
    fontSize: 17,
    fontWeight: "bold",
  },
});
