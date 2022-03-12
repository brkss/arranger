import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Settings : React.FC = () => {

  const deleteAll = async () => {
    await AsyncStorage.removeItem('TASKS');
  }

  return(
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Pressable style={styles.button} onPress={() => deleteAll()}>
          <Text style={styles.btnText}>
            DELETE ALL TASKS !
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 5,
    backgroundColor: '#434343',
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'condesed',

  }
})
