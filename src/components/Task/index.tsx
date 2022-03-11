import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Polyline } from "react-native-svg";

export const Task: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>YYYYYY 1</Text>
      <Text style={styles.time}>01:00:04</Text>
      <Svg height="50" style={{ marginTop: 10 }} width="100">
        <Polyline
          points="10,50 20,40 30,35 40,27 60,19 70,24 80,40 90,30 100,10"
          fill="none"
          stroke="#979797"
          strokeWidth="3"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#D8D8D8",
    borderRadius: 13,
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
