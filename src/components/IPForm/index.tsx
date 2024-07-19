import {Controller, useForm} from 'react-hook-form';
import {Button, Text, TextInput, View} from 'react-native';
import React from 'react';

type FormData = {
  ipAddress: string;
};

type IPFormProps = {
  onSubmit: (data: FormData) => void;
};

const IPPattern =
  /(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/;

export function IPForm({onSubmit}: IPFormProps) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      ipAddress: '',
    },
  });

  return (
    <View>
      <Controller
        control={control}
        rules={{
          pattern: IPPattern,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="IP Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="ipAddress"
      />
      {errors.ipAddress && <Text>This field must match to IP v4 format</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
