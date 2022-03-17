import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ITask } from "../../utils/types";
import { ProgressBar } from "../Task/Progress";
import { parseTime } from "../../utils/modules";
import { Tag } from "../Task/Tag";

const formatTime = (t: number) => {
  if (t < 10) return `0${t}`;
  return `${t}`;
};

interface Props {
  task: ITask;
}
export const StatisticsItem: React.FC<Props> = ({ task }) => {
  const time = parseTime(task.progress);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.name}</Text>
      {task.active ? <Tag /> : null}
      <Text style={styles.time}>
        You spent {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
      </Text>
      <ProgressBar id={task.uid} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding:
    marginTop: 30,
  },
  title: {
    fontFamily: "condesed",
    fontWeight: "bold",
    fontSize: 23,
    color: "#505050",
  },
  time: {
    fontWeight: "400",
    fontSize: 16,
    color: "#505050",
  },
});
