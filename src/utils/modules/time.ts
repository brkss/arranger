import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITask } from "../types/Task";
import { ITime } from '../types';

/*
 * Hours    => 01
 * Minutes  => 20
 * Seconds  => 00
 * = 100%
 *
 *
 */

export const calculateTime = (time: number): ITime => {
  let difference = +new Date() - +new Date(time);

  let timeLeft: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
}

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
