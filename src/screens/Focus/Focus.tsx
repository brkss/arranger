import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { _sketch } from "../../utils/sketch";
//import { ReactP5Wrapper } from "react-p5-wrapper";
import { ProcessingView } from "expo-processing";
import Svg, { Path } from "react-native-svg";

const { height, width } = Dimensions.get("screen");

export const Focus: React.FC = () => {
  return (
    <View style={styles.container}>
      <Svg height={height} width={width} style={{ backgroundColor: "black" }}>
        <Path
          fill={"white"}
          d="M50,40 L0,27 A3,3 0 0,0 3,30 L7,30 A3,3 0 0,0 10,27 L10,0 Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
