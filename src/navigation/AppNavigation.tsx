import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Timer, Add } from "../screens";

export const AppNavigation: React.FC = () => {
  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"Home"} component={Home} />
        <Screen name={"Timer"} component={Timer} />
      </Group>
      <Group screenOptions={{presentation: 'modal', 
    cardStyle:{
      backgroundColor:"transparent",
      opacity:0.99
  }}}>
        <Screen name={'add'} component={Add} /> 
      </Group>
    </Navigator>
  );
};
