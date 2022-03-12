import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  exit: () => void;
}

export const ExitButton: React.FC<Props> = ({exit}) => {
  return (
    <Pressable style={styles.container} onPress={() => exit()}>
      <View style={styles.circle} />
      <Text style={styles.title}>EXIT</Text>
    </Pressable>
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
