import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Circle } from "../components";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

interface ICircle {
  name: string;
  x: number;
  y: number;
  d: number;
  time: string;
}

const circles: ICircle[] = [
  {
    name: "TASK 1",
    time: "01:00:00",
    x: 150,
    y: 150,
    d: 100,
  },
  {
    name: "TASK 1",
    time: "01:00:00",
    x: 250,
    y: 150,
    d: 200,
  },
];

export const Home: React.FC = () => {
  return (
    <View style={{ flex: 1, width: "400%" }}>
      
      {/*
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.5}
        zoomStep={0.1}
        initialZoom={1}
        //bindToBorders={true}
        movementSensibility={1}
        style={{
          padding: 10,
          //backgroundColor: "red",
        }}
      >
        {circles.map((c, key) => (
          <Circle
            name={c.name}
            time={c.time}
            d={c.d}
            x={c.x}
            y={c.y}
            key={key}
          />
        ))}
      </ReactNativeZoomableView>
      */}
    </View>
  );
};
