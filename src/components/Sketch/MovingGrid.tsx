import React from "react";
import { View, Dimensions } from "react-native";
import Svg, { Line } from "react-native-svg";
import Animated, { useSharedValue } from "react-native-reanimated";
import { GridLine } from "./Line";

const { width, height } = Dimensions.get("screen");
const GAP = 20;
const STROKE = 1;

const generateHorizontalLines = (): number[] => {
  const points: number[] = [];
  for (let i = 1; i < height / (GAP + STROKE); i++) {
    points.push(i * (GAP + STROKE));
  }
  return points;
};
const generateVerticalLines = (): number[] => {
  const points: number[] = [];
  for (let i = 1; i < width / (GAP + STROKE); i++) {
    points.push(i * (GAP + STROKE));
  }
  return points;
};

const ylines: number[] = generateHorizontalLines();
const xlines: number[] = generateVerticalLines();

export const MovingGrid: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Svg style={{ backgroundColor: "black" }} height={height} width={width}>
        {ylines.map((point, key) => (
          <GridLine pos={"y"} val={point} wh={height} ww={width} key={key} />
        ))}
        {xlines.map((point, key) => (
          <GridLine pos={"x"} val={point} wh={height} ww={width} key={key} />
        ))}
      </Svg>
    </View>
  );
};
