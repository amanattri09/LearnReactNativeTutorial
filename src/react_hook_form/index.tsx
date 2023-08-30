import {useEffect, useState} from 'react';
import React from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {Button, StyleSheet, Text, View} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from './components/TextInput';

type FormValues = {
  email: string;
  passwod: string;
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  passwod: yup.string().required(),
});

const handleOnSubmit = async (data: FormValues) => {
  console.warn('got the data' + data.email + ' , ' + data.passwod);
};

const HookForm = () => {
  // use form hook and set default behaviour /values
  const {control, handleSubmit} = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const [formError, setError] = useState<Boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput
        name="email"
        control={control}
        label="Email"
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <Button
          title="Login"
          color="#ec5990"
          onPress={handleSubmit(handleOnSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 9,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
});

export default HookForm;
