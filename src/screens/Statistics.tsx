import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { StatisticsItem } from "../components";
import { getTasks } from "../utils/modules";
import { ITask } from "../utils/types";
import { useIsFocused } from "@react-navigation/native";

export const Statistics: React.FC = () => {
  const isFocus = useIsFocused();
  const [tasks, setTasks] = React.useState<ITask[]>(null);
  React.useEffect(() => {
    (async () => {
      const ts = await getTasks();
      setTasks(ts);
    })();
  }, [isFocus]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.heading}>STATISTICS</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
          {tasks &&
            tasks.map((task, key) => <StatisticsItem key={key} task={task} />)}
          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "condesed",
  },
  list: {
    marginTop: 20,
  },
});
