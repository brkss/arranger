import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

interface Props {
  navigate: () => void;
  name: string;
}

export const MenuItem: React.FC<Props> = ({name, navigate}) => {
  return (
    <Pressable style={styles.container} onPress={() => navigate()}>
      <View style={styles.circle} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#2D2D2D",
  },
  name: {
    fontFamily: "condesed",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 6,
  },
});
