import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { Input } from "../components";

export const Add: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.incube}>
        <Text style={styles.heading}>Create New {"\n"}Task.</Text>
        <View>
          <Input />
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  incube: {
    height: "50%",
    width: "100%",
    padding: 15,
    backgroundColor: "#D8D8D8",
    borderRadius: 20,
  },
  heading: {
    fontFamily: "condesed",
    fontWeight: "bold",
    fontSize: 33,
    lineHeight: 37,
    color: "#3C3C3D",
  },
});
