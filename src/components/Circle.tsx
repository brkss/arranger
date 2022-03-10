import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface Props {
  name: string;
  time: string;
  x: number;
  y: number;
  d: number;
}

export const Circle: React.FC<Props> = ({ name, time, x, y, d }) => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const offsetX = useSharedValue(x);
  const offsetY = useSharedValue(y);
  const dimension = useSharedValue(d);

  const gesture = Gesture.Pan();
  const styled = useAnimatedStyle(() => {
    return {
      width: dimension.value,
      height: dimension.value,
      borderRadius: dimension.value,
      transform: [
        { perspective: 1500 },
        { translateX: offsetX.value },
        { translateY: offsetY.value },
      ],
    };
  });
  return (
    <View pointerEvents={"box-none"}>
      <GestureDetector gesture={gesture}>
        <AnimatedPressable style={[styles.circle, styled]}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </AnimatedPressable>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    //height: 100,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFE6E6",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
  },
  time: {
    fontWeight: "bold",
  },
});
