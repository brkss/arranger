import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ExitButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.title}>EXIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    paddingRight: 20,
  },
  circle: {
    height: 38,
    width: 38,
    borderRadius: 38,
    backgroundColor: "#D8D8D8",
  },
  title: {
    fontFamily: "condesed",
    fontSize: 17,
    fontWeight: "bold",
    color: "#D8D8D8",
    textAlign: "center",
  },
});
