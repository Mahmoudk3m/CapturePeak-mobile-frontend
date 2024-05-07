import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, TouchableOpacity} from 'react-native';
import Field from '../components/Field';
import Animated, {FadeInDown} from 'react-native-reanimated';
import registerSchema from '../schemas/register';
import ErrorMessage from '@/Shared/components/ErrorMessage';
import {useUserRegister} from '../api/userRegister';

export default function RegisterForm() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AuthTypes.RegisterForm>({resolver: yupResolver(registerSchema)});

  const {mutate, isError, isPending} = useUserRegister();

  const onSubmit = (data: AuthTypes.Payload) => {
    const formattedData = {
      ...data,
      username: data.username.toLowerCase(),
    };

    mutate(formattedData);
  };

  return (
    <>
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
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          errorMessage={errors.password?.message}
        />
      </Animated.View>

      <Animated.View
        className="w-full"
        entering={FadeInDown.delay(400).duration(1000).springify()}>
        <Field
          control={control}
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry={true}
          errorMessage={errors.password?.message}
        />
      </Animated.View>

      <Animated.View
        className="w-full"
        entering={FadeInDown.delay(600).duration(1000).springify()}>
        <TouchableOpacity
          className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
          onPress={handleSubmit(onSubmit)}>
          <Text className="text-xl font-bold text-white text-center">
            {isPending ? 'Registering User ...' : 'Register'}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        className="flex-row justify-center"
        entering={FadeInDown.delay(800).duration(1000).springify()}>
        <Text className="text-gray-500 font-bold">
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text className="text-sky-600 font-bold">SignIn</Text>
        </TouchableOpacity>
      </Animated.View>
      {isError && <ErrorMessage message="User already exists" />}
    </>
  );
}
