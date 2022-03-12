import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "./Input";

interface Props {
  onChange: (k: string, v: string) => void;
}

export const LimitInput: React.FC<Props> = ({onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>LIMIT</Text>
      <View style={styles.row}>
        <View style={[styles.item, { paddingRight: 5 }]}>
          <Input onChange={(t) => onChange('hours', t) } placeholder={"HOURS"} />
        </View>
        <View style={styles.item}>
          <Input onChange={(t) => onChange('minutes', t) } placeholder={"MINUTES"} />
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
