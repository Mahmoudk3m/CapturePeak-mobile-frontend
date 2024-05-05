import {Text} from 'react-native';
import React from 'react';
export default function ErrorMessage({message}: {message: string}) {
  return <Text className="text-xs md:text-sm text-red-500 ">{message}</Text>;
}
