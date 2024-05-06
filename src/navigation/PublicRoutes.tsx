import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '@/features/auth';

const Stack = createNativeStackNavigator();

const PublicRoutes = () => {
  return (
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </>
  );
};

export default PublicRoutes;
