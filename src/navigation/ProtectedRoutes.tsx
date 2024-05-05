import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const ProtectedRoutes = () => {
  return (
    <>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default ProtectedRoutes;
