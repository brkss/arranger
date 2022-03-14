import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MainNavigation } from "./src/navigation";
import { useFonts } from "expo-font";
import { Loading } from "./src/components";

export default function App() {
  const [hc] = useFonts({
    condesed: require("./src/assets/helvitica-condensed.otf"),
  });

  if (!hc) return <Loading />;

  return (
    <>
      <MainNavigation />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
