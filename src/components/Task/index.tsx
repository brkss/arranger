import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "./Progress";
import { Tag } from "./Tag";

interface Props {
  name: string;
  time: string;
  progress: number;
  active: boolean;
}

export const Task: React.FC<Props> = ({ name, time, progress, active }) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: active ? "#1600FF" : "#979797",
          borderWidth: active ? 6 : 1,
          borderLeftWidth: active ? 6 : 0,
          borderTopWidth: active ? 6 : 0,
        },
      ]}
    >
      {active ? <Tag /> : null}
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
    fontFamily: "condesed",
    color: "#434343",
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "condesed",
    color: "#434343",
  },
});
