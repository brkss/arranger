import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { _sketch } from "../../utils/sketch";
import { GridSketch } from '../../components/Sketch';
import { FocusMusic } from '../../components';

export const Focus: React.FC = () => {
  return (
    <View style={styles.container}>
      <GridSketch />
      <FocusMusic />
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
