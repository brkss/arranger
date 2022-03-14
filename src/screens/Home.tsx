import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Task, AddButton, NavigationMenu } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { ITask } from "../utils/types";
import { activateTask, getTasks } from "../utils/modules";

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
      SetTasks(await getTasks());
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

  const activate = async (id: string) => {
    await activateTask(id);
    SetTasks(await getTasks());
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
                start={task.start}
                press={() => activate(task.uid)}
                longPress={() => deleteTaskAlert(task.name, task.uid)}
                active={task.active}
                name={task.name}
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
