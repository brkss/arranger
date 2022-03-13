import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Task, AddButton, NavigationMenu } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { ITask } from "../utils/types";

export const Home: React.FC<any> = ({ navigation }) => {
  const isFocused = useIsFocused();

  const [tasks, SetTasks] = React.useState<ITask[]>([]);

  const deleteTaskAlert = (name: string, id: string) => {
    Alert.alert("DELETE TASK", `Are you sure you want to delete ${name} ?`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "YES", onPress: async () => await deleteTask(id) },
    ]);
  };

  React.useEffect(() => {
    (async () => {
      const _tasks = JSON.parse((await AsyncStorage.getItem("TASKS")) || "[]");
      SetTasks(_tasks);
    })();
  }, [isFocused]);

  const deleteTask = async (id: string) => {
    const index = tasks.findIndex((x) => x.uid === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      const tmp = tasks;
      await AsyncStorage.setItem("TASKS", JSON.stringify(tmp));
      SetTasks([...tmp]);
    }
  };

  const activeTask = async (id: string) => {
    const index = tasks.findIndex((x) => x.uid == id);
    if (index != -1) {
      let isActive = false;
      if (tasks[index].active == true) isActive = true;
      const tmp = tasks.map((task) => ({
        ...task,
        active: false,
      }));
      if (!isActive) tmp[index].active = true;
      SetTasks([...tmp]);
      await AsyncStorage.setItem("TASKS", JSON.stringify(tmp));
    }
  };

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
                press={() => activeTask(task.uid)}
                longPress={() => deleteTaskAlert(task.name, task.uid)}
                active={task.active}
                name={task.name}
                time={task.time}
                progress={0}
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
