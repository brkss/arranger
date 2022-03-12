import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { TimerCount, EndTaskTimerButtom, ExitButton } from "../components";

export const Timer: React.FC<any> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <ExitButton exit={() => navigation.goBack()} />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.title}>STUDYING MATH</Text>
          <TimerCount />
        </View>
        <EndTaskTimerButtom />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
  title: {
    fontFamily: "condesed",
    fontWeight: "bold",
    fontSize: 30,
    color: "#0008FD",
  },
});
