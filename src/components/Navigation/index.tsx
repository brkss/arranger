import React from 'react';
import {View, StyleSheet} from 'react-native';
import { MenuItem } from './Item';

interface Props {
  navigation: any;
}

export const NavigationMenu : React.FC<Props> = ({navigation}) => {

  
  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <MenuItem name={'STATISTICS'}  navigate={() => {}} />
        </View>
        <View style={styles.item}>
          <MenuItem name={'TIMER'} navigate={() => navigation.push('Timer') } />
        </View>
        <View style={styles.item}>
          <MenuItem  name={'SETTINGS'} navigate={() => {}} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item:{
    width: '33%',
    alignItems: 'center'
  }
})
