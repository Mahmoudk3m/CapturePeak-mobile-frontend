import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommonRoutes from './CommonRoutes';
import useUserStore from '@/stores/userStore';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const {user} = useUserStore();
  const isAuthenticated = !!user?.token;
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      {CommonRoutes()}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
