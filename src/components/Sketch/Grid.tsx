import React from "react";
import { View, Text, Dimensions } from "react-native";
import Svg, { Rect, Line } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
  useAnimatedReaction,
} from "react-native-reanimated";

interface IPosition {
  x: number;
  y: number;
}

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const { height, width } = Dimensions.get("screen");
const GAP = 20;
const STROKE = 1;
const DELAY = 1000;

export const GridSketch: React.FC = () => {
  const rectX = useSharedValue(24);
  const rectY = useSharedValue(64);
  const move = useSharedValue(width - GAP - 8);

  React.useEffect(() => {
    move.value = 1;
  }, []);

  useAnimatedReaction(
    () => move.value,
    (v) => {
      if (v == 1) {
        rectX.value = withTiming(width - 34, { duration: 900 }, () => {
          move.value = 2;
        });
      } else if (v == 2) {
        rectY.value = withTiming(height - 64, { duration: 900 }, () => [
          (move.value = 3),
        ]);
      } else if (v == 3) {
        rectX.value = withTiming(24, { duration: 900 }, () => {
          move.value = 4;
        });
      } else if (v == 4) {
        rectY.value = withTiming(64, { duration: 900 }, () => {
          move.value = 1;
        });
      }
    }
  );

  const rectNextPosition = (): IPosition => {
    const pos: IPosition = {
      x: rectX.value,
      y: rectY.value,
    };
    if (rectX.value + 24 >= 4 && rectX.value + 24 <= width - 4)
      pos.x = rectX.value + 24;
    else if (rectY.value + 24 >= 4 && rectY.value + 24 <= height - 4)
      pos.y = rectY.value + 24;
    else {
      (pos.x = 24), (pos.y = 64);
    }

    return pos;
  };

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
  return (
    <View style={{ flex: 1 }}>
      <Svg height={height} width={width} style={{ backgroundColor: "black" }}>
        {generateHorizontalLines().map((point, key) => (
          <Line
            key={key}
            stroke="blue"
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
            stroke="blue"
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
