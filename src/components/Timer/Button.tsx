import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export const EndTaskTimerButtom: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.txt}>END TASK</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0008FF",
    padding: 0,
    margin: 20,
  },
  txt: {
    marginTop: -5,
    fontSize: 40,
    fontWeight: "bold",
    color: "#151515",
    //lineHeight: 54,
    textAlign: "center",
    fontFamily: "condesed",
  },
});
