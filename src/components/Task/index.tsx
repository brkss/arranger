import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Task : React.FC = () => {

  return(
    <View style={styles.container}>
      <Text style={styles.title}>YYYYYY 1</Text>
      <Text style={styles.time}>01:00:04</Text>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  time: {
    fontSize: 14,
    fontWeight: '600'
  }
})
