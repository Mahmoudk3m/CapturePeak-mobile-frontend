import useUserStore from '@/stores/userStore';
import clsx from 'clsx';
import {ReactNode} from 'react';
import React from 'react';
import {Image, Pressable, ScrollView, View} from 'react-native';
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';

export default function FormLayout({
  children,
  currentForm,
  onImageUpload,
  image,
}: {
  children: ReactNode;
  currentForm: string;
  onImageUpload?: () => void;
  image?: string;
}) {
  const {user} = useUserStore();
  return (
    <ScrollView className="bg-white h-full w-full">
      {/* background */}
      <Image
        className="h-full w-full absolute"
        source={require('@/assets/images/background.png')}
      />

      {currentForm === 'profile' && (
        <View className="absolute h-full w-full top-10 items-center">
          <Animated.Text
            entering={FadeInLeft.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl">
            Edit Profile
          </Animated.Text>
          <Pressable className="z-50" onPress={onImageUpload}>
            <Animated.Image
              entering={FadeInRight.duration(1000).springify()}
              className="object-cover w-40 h-40 rounded-full"
              source={{
                uri: image
                  ? image
                  : user && user.image
                  ? user.image
                  : 'https://static.productionready.io/images/smiley-cyrus.jpg',
              }}
              alt="Bordered avatar"
            />
          </Pressable>
        </View>
      )}

      {currentForm !== 'profile' && (
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
      )}

      {/* title, form */}
      <View
        className={clsx(
          'w-full flex justify-around',
          currentForm === 'Login'
            ? 'pt-52 pb-10'
            : currentForm === 'Register'
            ? 'pt-56 pb-8'
            : 'pt-64 pb-10',
        )}>
        {/* Title */}
        {currentForm !== 'profile' && (
          <View className="flex items-center">
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              className="text-white font-bold tracking-wider text-5xl">
              {currentForm}
            </Animated.Text>
          </View>
        )}

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
