import clsx from 'clsx';
import {ReactNode} from 'react';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';

export default function AuthLayout({
  children,
  currentForm,
}: {
  children: ReactNode;
  currentForm: string;
}) {
  return (
    <ScrollView className="bg-white h-full w-full">
      {/* background */}
      <Image
        className="h-full w-full absolute"
        source={require('@/assets/images/background.png')}
      />

      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[190] w-[77]"
          source={require('@/assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('@/assets/images/light.png')}
        />
      </View>

      {/* title, form */}
      <View
        className={clsx(
          'w-full flex justify-around',
          currentForm === 'Login' ? 'pt-52 pb-10' : 'pt-56 pb-8',
        )}>
        {/* Title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl">
            {currentForm}
          </Animated.Text>
        </View>

        {/* Form */}
        <View
          className={clsx(
            'flex items-center mx-4 space-y-4 ',
            currentForm === 'Login' ? 'mt-28' : 'mt-20',
          )}
          style={{gap: 16}}>
          {children}
        </View>
      </View>
    </ScrollView>
  );
}
