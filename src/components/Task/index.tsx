import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ProgressBar } from "./Progress";
import { Tag } from "./Tag";
import { ITime } from "../../utils/types/Time";
import { useTimer, formatTime } from "../../utils/hooks";
import {
  calculateTime,
  getTaskProgress,
  parseTime,
  saveTaskProgress,
} from "../../utils/modules";
import { ITask } from "../../utils/types";

interface Props {
  press: () => void;
  longPress: () => void;
  task: ITask;
}

export const Task: React.FC<Props> = ({ task, press, longPress }) => {
  let timer = null;
  if (task.active) timer = useTimer(task.start, task.progress);
  //const timer = useTimer(task.start, task.progress);

  return (
    <Pressable
      onPress={() => press()}
      onLongPress={() => longPress()}
      style={[
        styles.container,
        {
          borderColor: task.active ? "#1600FF" : "#979797",
          borderWidth: task.active ? 6 : 1,
          borderLeftWidth: task.active ? 6 : 0,
          borderTopWidth: task.active ? 6 : 0,
        },
      ]}
    >
      {task.active ? <Tag /> : null}
      <Text style={styles.title}>{task.name}</Text>
      {task.active && timer ? (
        <Text style={styles.time}>
          {formatTime(timer.hours)}:{formatTime(timer.minutes)}:
          {formatTime(timer.seconds)}
        </Text>
      ) : (
        <Text style={styles.time}>
          {formatTime(parseTime(task.progress).hours)}:
          {formatTime(parseTime(task.progress).minutes)}:
          {formatTime(parseTime(task.progress).seconds)}
        </Text>
      )}
      <ProgressBar id={task.uid} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#EAEAEA",
    //borderRadius: 13,
    minHeight: 130,
    justifyContent: "center",
    borderColor: "#979797",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "condesed",
    color: "#434343",
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "condesed",
    color: "#434343",
  },
});
