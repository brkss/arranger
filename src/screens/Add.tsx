import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, FormButton, LimitInput } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Add: React.FC = () => {
  const [form, SetForm] = React.useState<any>({});

  const handleForm = (key: string, val: string) => {
    SetForm({
      ...form,
      [key]: val,
    });
  };

  const add = async () => {
    if (!form || !form.name) {
      // trigger error !
      return;
    }
    const tasks = JSON.parse((await AsyncStorage.getItem("TASKS")) || "[]");
    const data = {
      name: form.name,
      limitHour: parseInt(form.hours) || 0,
      limitMinutes: parseInt(form.minutes) || 0,
      time: "00:00:00",
    };
    console.log("ADD DATA : ", data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.incube}>
        <Text style={styles.heading}>Create New {"\n"}Task.</Text>
        <View>
          <Input onChange={(v) => handleForm("name", v)} placeholder={"NAME"} />
          <LimitInput onChange={(k, v) => handleForm(k, v)} />
          <FormButton pressed={() => add()} />
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
