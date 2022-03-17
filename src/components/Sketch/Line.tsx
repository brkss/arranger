import React from "react";
import Svg, { Line } from "react-native-svg";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedReaction,
  useAnimatedProps,
} from "react-native-reanimated";

interface Props {
  pos: string;
  val: number;
  wh: number;
  ww: number;
}

const AnimatedLine = Animated.createAnimatedComponent(Line);

export const GridLine: React.FC<Props> = ({ pos, val, ww, wh }) => {
  const offset = useSharedValue(val);
  const move = useSharedValue(1);
  const speed = useSharedValue(5);
  const factor = useSharedValue(1);
  const style = useAnimatedProps(() => {
    return {
      x1: pos == "x" ? offset.value : 0,
      x2: pos == "x" ? offset.value : ww,
      y1: pos == "y" ? offset.value : 0,
      y2: pos == "y" ? offset.value : wh,
    };
  });

  React.useEffect(() => {
    move.value = 0;
  }, []);

  const onScreen = () => {
    if (pos == "x" && val < ww && val > 0) return true;
    else if (pos == "y" && val < wh && val > 0) return true;
    return false;
  };

  useAnimatedReaction(
    () => move.value,
    (v) => {
      if (
        (pos == "x" && offset.value < ww && offset.value > 0) ||
        (pos == "y" && offset.value < wh && offset.value > 0)
      ) {
        offset.value = withTiming(offset.value + 5, {
          duration: 100,
        });
        
      }else{
        offset.value = 1;
      }
        speed.value += factor.value;
      if (speed.value > 20 || speed.value <= 0) {
        factor.value = -factor.value;
      }
      speed.value += factor.value;
      if (move.value == 1) move.value = 0;
      else move.value = 1;
    }
  );

  return (
    <Svg>
      <AnimatedLine stroke="blue" strokeWidth={1} animatedProps={style} />
    </Svg>
  );
};
