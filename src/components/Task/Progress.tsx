import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { getTaskProgress } from "../../utils/modules";

interface Props {
  id: string;
}

export const ProgressBar: React.FC<Props> = ({ id }) => {

  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    (async () => {
      const p = await getTaskProgress(id);
      setProgress(p);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    height: 14,
    borderColor: "#979797",
    borderRadius: 14,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  progress: {
    height: 12,
    borderRadius: 14,
    backgroundColor: "#939090",
  },
});
