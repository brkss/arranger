import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import {   EndTaskTimerButtom} from '../components'

export const Timer : React.FC = () => {

  return(
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <EndTaskTimerButtom />            
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  }
})


  
