import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export const Input: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={"NAME"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    //backgroundColor: "red",
  },
  input: {
    padding: 5,
    width: "100%",
  },
});
