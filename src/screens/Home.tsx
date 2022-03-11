import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Task } from "../components";

/*
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
 */
export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.row}>
          <View style={styles.item}>
            <Task />
          </View>
          <View style={styles.item}>
            <Task />
          </View>
        </View>
      </SafeAreaView>

      {/*
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.5}
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    padding: 5,
    width: "50%",
  },
});
