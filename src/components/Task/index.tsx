import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ProgressBar } from "./Progress";
import { Tag } from "./Tag";
import { ITime } from "../../utils/types/Time";
import { useTimer, formatTime } from "../../utils/hooks";
import { calculateTime, parseTime } from "../../utils/modules";

interface Props {
  name: string;
  time: number;
  progress: number;
  active: boolean;
  press: () => void;
  longPress: () => void;
}

export const Task: React.FC<Props> = ({
  name,
  time,
  progress,
  active,
  press,
  longPress,
}) => {
  const timer = useTimer(time);
  const [t, setT] = React.useState<ITime | null>(null);

  return (
    <Pressable
      onPress={() => press()}
      onLongPress={() => longPress()}
      style={[
        styles.container,
        {
          borderColor: active ? "#1600FF" : "#979797",
          borderWidth: active ? 6 : 1,
          borderLeftWidth: active ? 6 : 0,
          borderTopWidth: active ? 6 : 0,
        },
      ]}
    >
      {active ? <Tag /> : null}
      <Text style={styles.title}>{name}</Text>
      {active && t ? (
        <Text style={styles.time}>
          {formatTime(t.hours)}:{formatTime(t.minutes)}:{formatTime(t.seconds)}
        </Text>
      ) : (
        <Text style={styles.time}>
          {formatTime(parseTime(progress).hours)}:
          {formatTime(parseTime(progress).minutes)}:
          {formatTime(parseTime(progress).seconds)}
        </Text>
      )}
      <ProgressBar />
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
