import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigation"
      defaultStatus="closed"
      screenOptions={{
        headerShown: false,
      }}></Drawer.Navigator>
  );
}
