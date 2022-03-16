import React from "react";
import { View, Text, Dimensions } from "react-native";
import Svg, { Path, Line } from "react-native-svg";

const { height, width } = Dimensions.get("screen");
const GAP = 20;
const STROKE = 1;

export const GridSketch: React.FC = () => {
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
  return (
    <View style={{ flex: 1 }}>
      <Svg height={height} width={width} style={{ backgroundColor: "black" }}>
        {generateHorizontalLines().map((point, key) => (
          <Line
            key={key}
            stroke="white"
            strokeWidth={STROKE}
            x1="0"
            y1={point}
            x2={width}
            y2={point}
          />
        ))}
        {generateVerticalLines().map((point, key) => (
          <Line
            key={key}
            stroke="white"
            strokeWidth={STROKE}
            x1={point}
            y1={0}
            x2={point}
            y2={height}
          />
        ))}
      </Svg>
    </View>
  );
};
