import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  pressed: () => void;
}

export const FormButton: React.FC<Props> = ({ pressed }) => {
  return (
    <Pressable style={styles.container} onPress={() => pressed()}>
      <Text style={styles.txt}>CREATE</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#464646",
    padding: 10,
  },
  txt: {
    fontWeight: "bold",
    fontFamily: "condesed",
    fontSize: 20,
  },
});
