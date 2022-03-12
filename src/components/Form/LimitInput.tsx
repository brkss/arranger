import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "./Input";

export const LimitInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>LIMIT</Text>
      <View style={styles.row}>
        <View style={[styles.item, { paddingRight: 5 }]}>
          <Input onChange={(t) => {}} placeholder={"HOURS"} />
        </View>
        <View style={styles.item}>
          <Input onChange={(t) => {}} placeholder={"MINUTES"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: {
    fontFamily: "condesed",
    fontWeight: "bold",
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
  },
});
