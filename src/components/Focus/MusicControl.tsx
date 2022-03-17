import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  press: () => void;
}

export const MusicControl: React.FC<Props> = ({press}) => {
  return (
    <Pressable style={styles.container} onPress={() => press()}>
      <Text style={styles.txt}>PAUSE</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "white",
    width: 200,
    marginTop: 40,
  },
  txt: {
    textAlign: "center",
    color: "#0300EB",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "condesed",
  },
});
