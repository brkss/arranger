import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITask } from "../types/Task";
/*
 * Hours    => 01
 * Minutes  => 20
 * Seconds  => 00
 * = 100%
 *
 *
 */

const getTasks = async (): Promise<ITask[]> => {
  return JSON.parse((await AsyncStorage.getItem("TASKS")) || "[]");
};

export const saveTaskProgress = async (id: string, time: number) => {
  const tasks: ITask[] = await getTasks();
  const index = tasks.findIndex((x) => (x.uid = id));
  if (index != -1) {
    const diff = time - tasks[index].start;
    tasks[index].progress = diff;
    await AsyncStorage.setItem("TASKS", JSON.stringify(tasks));
  }
};
