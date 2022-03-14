import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import {
  NoTaskInfo,
  TimerCount,
  EndTaskTimerButtom,
  ExitButton,
} from "../components";
import { ITask } from "../utils/types";
import { getTasks } from "../utils/modules";

export const Timer: React.FC<any> = ({ navigation }) => {
  const [task, setTask] = React.useState<ITask | null>(null);

  const getActiveTask = async () => {
    const tasks = await getTasks();
    const index = tasks.findIndex((x) => x.active);
    if (index != -1) {
      setTask(tasks[index]);
    }
  };

  React.useEffect(() => {
    (async () => {
      await getActiveTask();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <ExitButton exit={() => navigation.goBack()} />
        </View>
        {task ? (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={styles.title}>{task.name}</Text>
              <TimerCount otime={task.start} />
            </View>
            <EndTaskTimerButtom />
          </View>
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <NoTaskInfo />
          </View>
        )}
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
