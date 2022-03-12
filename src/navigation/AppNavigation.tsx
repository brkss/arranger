import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Timer } from "../screens";

export const AppNavigation: React.FC = () => {
  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"Home"} component={Home} />
        <Screen name={"Timer"} component={Timer} />
      </Group>
    </Navigator>
  );
};
