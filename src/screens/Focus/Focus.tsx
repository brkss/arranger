import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { _sketch } from "../../utils/sketch";
import { GridSketch, MovingGrid } from "../../components/Sketch";
import { FocusMusic } from "../../components";

export const Focus: React.FC = () => {
  const [s, setS] = React.useState(false);
  return (
    <View style={styles.container}>
      {s ? <GridSketch /> : <MovingGrid />}
      <FocusMusic press={() => setS(!s)} />
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
