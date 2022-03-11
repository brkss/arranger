import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Polyline } from "react-native-svg";
import { ProgressBar } from "./Progress";

interface Props {
  name: string;
  time: string;
  progress: number;
}

export const Task: React.FC<Props> = ({ name, time, progress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.time}>{time}</Text>
      <ProgressBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#EAEAEA",
    //borderRadius: 13,
    minHeight: 130,
    justifyContent: "center",
    borderColor: "#979797",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
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
