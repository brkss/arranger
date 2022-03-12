import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  add: () => void;
}

export const AddButton : React.FC<Props> = ({add}) => {
  return (
    <Pressable style={styles.container} onPress={() => add()}>
      <Text style={styles.txt}>ADD</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#282828",
    borderWidth: 1,
    borderColor: "#3A3939",
  },
  txt: {
    color: "#D3D2D2",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
