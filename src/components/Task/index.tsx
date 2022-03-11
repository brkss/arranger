import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Polyline } from "react-native-svg";
import { ProgressBar } from "./Progress";
justifyContent: "center";
export const Task: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>YYYYYY 1</Text>
      <Text style={styles.time}>01:00:04</Text>
      <ProgressBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#D8D8D8",
    borderRadius: 13,
    minHeight: 100,
    justifyContent: "center",
    borderColor: "#979797",
    borderWidth: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
  },
});
