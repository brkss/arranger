import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Settings: React.FC = () => {
  const deleteAll = async () => {
    await AsyncStorage.removeItem("TASKS");
  };

  const displayAll = async () => {
    const tasks = await AsyncStorage.getItem("TASKS");
    console.log("TASKS => ", JSON.parse(tasks || "[]"));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Pressable style={styles.button} onPress={() => deleteAll()}>
          <Text style={styles.btnText}>DELETE ALL TASKS !</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => displayAll()}>
          <Text style={styles.btnText}>SHOW TASKS</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    padding: 5,
    backgroundColor: "#434343",
  },
  btnText: {
    color: "white",
    fontSize: 17,
    fontFamily: "condesed",
    textAlign: "center",
  },
});
