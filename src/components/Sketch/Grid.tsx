import React from "react";
import { View, Text, Dimensions } from "react-native";
import Svg, { Rect, Line } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
} from "react-native-reanimated";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const { height, width } = Dimensions.get("screen");
const GAP = 20;
const STROKE = 1;

export const GridSketch: React.FC = () => {
  const rectX = useSharedValue(24);
  const rectY = useSharedValue(64);

  const rectStyle = useAnimatedProps(() => {
    return {
      x: rectX.value,
      y: rectY.value,
    };
  });

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
  const moveRect = () => {};
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
        <AnimatedRect
          animatedProps={rectStyle}
          stroke={"white"}
          strokeWidth={STROKE}
          height="21"
          width="21"
          fill="white"
        />
      </Svg>
    </View>
  );
};
