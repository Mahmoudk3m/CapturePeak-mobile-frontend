import React from 'react';
import {Image, View} from 'react-native';

export default function Header() {
  return (
    <View className="flex-row w-full items-center my-2">
      <Image
        source={require('@/assets/images/logo.png')}
        className="w-14 h-14 object-cover"
      />
      <Image
        source={require('@/assets/images/capturePeak.png')}
        className="w-32 h-10 object-cover"
      />
    </View>
  );
}
