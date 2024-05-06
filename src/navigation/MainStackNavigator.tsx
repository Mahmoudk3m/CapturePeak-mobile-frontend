import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import useUserStore from '@/stores/userStore';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const {user} = useUserStore();
  const isAuthenticated = !!user?.token;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? ProtectedRoutes() : PublicRoutes()}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
