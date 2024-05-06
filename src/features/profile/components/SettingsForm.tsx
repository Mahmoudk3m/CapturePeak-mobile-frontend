import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {profileSchema} from '../schemas/profile';
import {useForm} from 'react-hook-form';
import {useUpdateUser} from '../api/updateUser';
import Animated, {FadeInDown} from 'react-native-reanimated';
import Field from '@/features/auth/components/Field';
import {Text, TouchableOpacity, View} from 'react-native';
import useUserStore from '@/stores/userStore';
import {removeToken} from '@/utils/storage';

export default function SettingsForm({image}: {image?: string}) {
  const {user, setUser} = useUserStore();
  const {control, handleSubmit} = useForm<SettingsTypes.User>({
    resolver: yupResolver(profileSchema),
  });

  const {mutate, isPending} = useUpdateUser();

  const onSubmit = async (data: SettingsTypes.User) => {
    if (image) {
      data.image = image;
    }
    const formattedData = {
      ...data,
      username: data.username?.toLowerCase(),
    };

    mutate({user: formattedData});
  };

  return (
    <View className="w-full -mb-4" style={{gap: 16}}>
      <Animated.View
        className="w-full"
        entering={FadeInDown.duration(1000).springify()}>
        <Field
          control={control}
          name="username"
          placeholder="Username"
          defaultValue={user?.username || ''}
        />
      </Animated.View>
      <Animated.View
        className="w-full"
        entering={FadeInDown.delay(200).duration(1000).springify()}>
        <Field
          control={control}
          secureTextEntry={true}
          name="password"
          placeholder="Password"
        />
      </Animated.View>
      <Animated.View
        className="w-full"
        entering={FadeInDown.delay(400).duration(1000).springify()}>
        <TouchableOpacity
          className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
          onPress={handleSubmit(onSubmit)}
          disabled={isPending}>
          <Text className="text-xl font-bold text-white text-center">
            {isPending ? 'Saving...' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        className="w-full"
        entering={FadeInDown.delay(400).duration(1000).springify()}>
        <TouchableOpacity
          className="w-full bg-red-600 p-3 rounded-2xl mb-3"
          onPress={async () => {
            await removeToken('token');
            setUser(null);
          }}
          disabled={isPending}>
          <Text className="text-xl font-bold text-white text-center">
            Logout
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
