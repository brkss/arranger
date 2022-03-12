import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TimerCount: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.timeUnit}>
          <Text style={styles.value}>09</Text>
          <Text style={styles.unit}>Hours</Text>
        </View>
        <View style={styles.timeUnit}>
          <Text style={styles.value}>19</Text>
          <Text style={styles.unit}>Minutes</Text>
        </View>
        <View style={styles.timeUnit}>
          <Text style={styles.value}>00</Text>
          <Text style={styles.unit}>Seconds</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleContainer: {},
  subtitle: {
    fontFamily: "condesed",
    fontSize: 53,
    color: "#0008FD",
  },
  timeContainer: {
    marginTop: 40,
  },
  timeUnit: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    marginBottom: 20,
  },
  unit: {
    fontFamily: "condesed",
    fontSize: 63,
    fontWeight: "bold",
    color: "#0008FD",
    marginLeft: 7,
  },
  value: {
    fontFamily: "condesed",
    fontSize: 79,
    fontWeight: "bold",
    color: "#0008FD",
  },
});
