import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';

export const AppNavigation : React.FC = () => {

  const { Group, Navigator, Screen } = createStackNavigator();

  return(
    <Navigator>
      <Group>
        <Screen name={'Home'} component={Home} />
      </Group>
    </Navigator>
  )

}
