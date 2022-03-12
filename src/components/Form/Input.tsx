import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

interface Props {
  placeholder: string;
  onChange: (t: string) => void;
}

export const Input: React.FC<Props> = ({onChange, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={(t) => onChange(t)} style={styles.input} />
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
    width: "100%",
    fontFamily: "condesed",
    fontWeight: "bold",
    fontSize: 21,
  },
});
