import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface Props {
  x: number;
  y: number;
  d: number;
}

export const Circle: React.FC<Props> = ({ x, y, d }) => {
  const offsetX = useSharedValue(x);
  const offsetY = useSharedValue(y);
  const dimension = useSharedValue(d);

  const gesture = Gesture.Pan();

  return (
    <View pointerEvents={"box-none"}>
      <GestureDetector gesture={gesture}>
        <Pressable style={[styles.circle]}>
          <Text style={styles.name}>TASK 1</Text>
          <Text style={styles.time}>01:00:02</Text>
        </Pressable>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 100,
    width: 100,
    backgroundColor: "#FFE6E6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  name: {
    fontWeight: "bold",
  },
  time: {
    fontWeight: "bold",
  },
});
