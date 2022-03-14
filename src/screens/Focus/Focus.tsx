import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { _sketch } from "../../utils/sketch";
//import { ReactP5Wrapper } from "react-p5-wrapper";
import { ProcessingView } from "expo-processing";

export const Focus: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProcessingView  sketch={_sketch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
