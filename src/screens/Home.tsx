import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Task, AddButton, NavigationMenu } from "../components";

interface ITask {
  name: string;
  time: string;
  progress: number;
  active: boolean;
}

const tasks: ITask[] = [
  {
    progress: 30,
    time: "02:33:01",
    name: "TASK N22",
    active: true,
  },
  {
    progress: 60,
    time: "01:04:00",
    name: "TASK N3",
    active: false,
  },
  {
    progress: 60,
    time: "01:04:00",
    name: "TASK N4",
    active: false,
  },
  {
    progress: 60,
    time: "01:04:00",
    name: "TASK N10",
    active: false,
  },
  {
    progress: 60,
    time: "01:04:00",
    name: "TASK N9",
    active: false,
  },
  {
    progress: 60,
    time: "01:04:00",
    name: "TASK N00",
    active: false,
  },
];

export const Home: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.row}>
          <View
            style={{ width: "100%", minHeight: 100, justifyContent: "center" }}
          >
            <NavigationMenu navigation={navigation} />
          </View>
          <View style={{ width: "100%" }}>
            <AddButton add={() => navigation.push("add")} />
          </View>
          {tasks.map((task, key) => (
            <View key={key} style={styles.item}>
              <Task
                active={task.active}
                name={task.name}
                time={task.time}
                progress={task.progress}
              />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    //padding: 5,
    width: "50%",
  },
});
