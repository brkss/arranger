import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export const Add: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.txt}>ADD</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#4A4949",
    borderWidth: 1,
    borderColor: "#3A3939",
  },
  txt: {
    color: "#D3D2D2",
    fontWeight: "bold",
  },
});
