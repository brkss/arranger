import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

interface Props {
  press: () => void;
}

export const EnterFocusModeButton: React.FC<Props> = ({ press }) => {
  return (
    <Pressable onPress={() => press()} style={styles.container}>
      <Text style={styles.txt}>FOCUS MODE</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
  txt: {
    textAlign: "center",
    fontFamily: "condesed",
    fontSize: 20,
    fontWeight: "bold",
    color: "#0008FF",
  },
});
