import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Task, AddButton, NavigationMenu } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ITask {
  name: string;
  time: string;
  progress: number;
  active: boolean;
}

export const Home: React.FC<any> = ({ navigation }) => {
  const [tasks, SetTasks] = React.useState<ITask[]>([]);

  const deleteTaskAlert = (name: string) =>
    Alert.alert("DELETE TASK", `Are you sure you want to delete ${name} ?`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "YES", onPress: () => console.log("OK Pressed") },
    ]);

  React.useEffect(() => {
    (async () => {
      const _tasks = JSON.parse((await AsyncStorage.getItem("TASKS")) || "[]");
      SetTasks(_tasks);
    })();
  }, []);

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
                press={() => {}}
                longPress={() => deleteTaskAlert(task.name)}
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
