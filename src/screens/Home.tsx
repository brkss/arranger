import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import {
  EnterFocusModeButton,
  Task,
  AddButton,
  NavigationMenu,
} from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { ITask } from "../utils/types";
import { activateTask, getTasks } from "../utils/modules";

const chunking = (arr: ITask[]): ITask[][] => {
  const chunked: ITask[][] = [[]];
  let i: number, j: number;
  for (i = 0, j = arr.length; i < j; i += 2) {
    let chunk = arr.slice(i, i + 2);
    chunked.push(chunk);
  }
  return chunked;
};

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
      const tasks: ITask[] = await getTasks();
      SetTasks(tasks);
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
    console.log("ACTIVATE TASK !");
    await activateTask(id);
    SetTasks(await getTasks());
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.navigationContainer}>
          <NavigationMenu navigation={navigation} />
        </View>
        <AddButton add={() => navigation.push("add")} />
        <ScrollView>
          {chunking(tasks).map((chunk, key) => (
            <View key={key} style={styles.row}>
              {chunk.map((task, key) => (
                <View key={key} style={styles.item}>
                  <Task
                    task={task}
                    press={() => activate(task.uid)}
                    longPress={() => deleteTaskAlert(task.name, task.uid)}
                  />
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
        <EnterFocusModeButton press={() => navigation.push("Focus")} />
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
  navigationContainer: {
    minHeight: 100,
    justifyContent: "center",
  },
});
