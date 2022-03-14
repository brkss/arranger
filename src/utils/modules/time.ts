import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITask } from "../types/Task";
import { ITime } from "../types";

export const calculateTime = (time: number, progress?: number): ITime => {
  let difference = +new Date() + (progress || 0) - +new Date(time);

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
};

export const parseTime = (progress: number): ITime => {
  let time: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  if (progress > 0) {
    time = {
      hours: Math.floor((progress / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((progress / 1000 / 60) % 60),
      seconds: Math.floor((progress / 1000) % 60),
    };
  }
  return time;
};

export const getTasks = async (): Promise<ITask[]> => {
  return JSON.parse((await AsyncStorage.getItem("TASKS")) || "[]");
};

export const activateTask = async (id: string) => {
  const tasks = await getTasks();
  const index = tasks.findIndex((x) => x.uid === id);
  const ai = tasks.findIndex((x) => x.active === true);
  if (index != -1) {
    if (ai != -1) {
      tasks[ai].active = false;
      tasks[ai].progress += +new Date() - tasks[ai].start;
      tasks[ai].start = 0;
    }
    tasks[index].active = true;
    tasks[index].start = +new Date();
    await AsyncStorage.setItem("TASKS", JSON.stringify(tasks));
  }
};

export const saveTaskProgress = async (id: string) => {
  const tasks: ITask[] = await getTasks();
  const index = tasks.findIndex((x) => (x.uid = id));
  if (index != -1) {
    const progress =
      +new Date() - (+new Date(tasks[index].start) + tasks[index].progress);
    tasks[index].progress = progress;
    await AsyncStorage.setItem("TASKS", JSON.stringify(tasks));
  }
};
