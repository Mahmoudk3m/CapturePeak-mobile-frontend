import React from 'react';
import {TextInput, View} from 'react-native';
import {Controller} from 'react-hook-form';
import ErrorMessage from '@/Shared/components/ErrorMessage';

export default function Field({
  placeholder,
  control,
  name,
  errorMessage,
  secureTextEntry,
  ...rest
}: {
  placeholder: string;
  control: any;
  name: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
}) {
  return (
    <>
      <View className="bg-black/5 p-1 rounded-2xl w-full">
        <Controller
          control={control}
          name={name}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="text-gray-800"
              placeholder={placeholder}
              placeholderTextColor={'gray'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
              underlineColorAndroid="transparent"
              {...rest}
            />
          )}
        />
      </View>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
}
