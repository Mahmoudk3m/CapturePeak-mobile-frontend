import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import loginSchema from '../schemas/login';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useUserLogin} from '../api/userLogin';
import {Text, TouchableOpacity} from 'react-native';
import Field from '../components/Field';
import Animated, {FadeInDown} from 'react-native-reanimated';
import ErrorMessage from '@/Shared/components/ErrorMessage';

export default function LoginForm() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AuthTypes.Payload>({resolver: yupResolver(loginSchema)});

  const {mutate, isError, isPending} = useUserLogin();

  const onSubmit = (data: AuthTypes.Payload) => {
    const formattedData = {
      ...data,
      username: data.username.toLowerCase(),
    };

    mutate(formattedData);
  };

  return (
    <>
      {isError && <ErrorMessage message="Invalid credentials" />}

      <Animated.View
        className="w-full"
        entering={FadeInDown.duration(1000).springify()}>
        <Field
          control={control}
          name="username"
          placeholder="Username"
          errorMessage={errors.username?.message}
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
          errorMessage={errors.password?.message}
        />
      </Animated.View>

      <Animated.View
        className="w-full"
        entering={FadeInDown.delay(400).duration(1000).springify()}>
        <TouchableOpacity
          className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
          onPress={handleSubmit(onSubmit)}>
          <Text className="text-xl font-bold text-white text-center">
            {isPending ? 'Logging In ...' : 'Login'}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        className="flex-row justify-center"
        entering={FadeInDown.delay(600).duration(1000).springify()}>
        <Text className="text-gray-500 font-bold">Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text className="text-sky-600 font-bold">SignUp</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
