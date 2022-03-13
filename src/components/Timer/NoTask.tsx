import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const NoTaskInfo : React.FC = () => {


  return(
    <View style={styles.container}>
      <Text style={styles.txt}>No Active Tasks !</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  txt: {
    fontFamily: 'condesed',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0008FD'
  }
})

