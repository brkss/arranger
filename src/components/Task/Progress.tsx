import React from "react";
import { View, StyleSheet } from "react-native";

export const ProgressBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: "40%" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    height: 14,
    borderColor: "#979797",
    borderRadius: 14,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  progress: {
    height: 12,
    borderRadius: 14,
    backgroundColor: "#939090",
  },
});
