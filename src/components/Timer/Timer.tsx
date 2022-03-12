import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatTime, useTimer } from "../../utils";

const TIME = new Date().getTime();

export const TimerCount: React.FC = () => {
  const time = useTimer(TIME);
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.timeUnit}>
          <Text style={styles.value}>{formatTime(time.hours)}</Text>
          <Text style={styles.unit}>Hours</Text>
        </View>
        <View style={styles.timeUnit}>
          <Text style={styles.value}>{formatTime(time.minutes)}</Text>
          <Text style={styles.unit}>Minutes</Text>
        </View>
        <View style={styles.timeUnit}>
          <Text style={styles.value}>{formatTime(time.seconds)}</Text>
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
    //marginTop: 40,
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
