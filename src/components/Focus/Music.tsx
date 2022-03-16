import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export const FocusMusic: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DISCOVERY 3</Text>
      <Text style={styles.time}>21:04</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "condesed",
  },
  time: {
    color: "white",
    fontSize: 30,
    fontFamily: "condesed",
  },
});
