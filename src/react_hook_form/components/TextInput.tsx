import React from 'react';
import {
  FieldValue,
  FieldValues,
  Path,
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form';
import {
  TextInput as RnTextInput,
  TextInputProps as RnTextInputProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Control} from 'react-hook-form';

interface TextInputProps<T extends FieldValues> extends RnTextInputProps {
  control: Control<T>;
  name: Path<T>;
  label: string;
}

export default function TextInput<T extends FieldValues>({
  control,
  name,
  ...restProps
}: TextInputProps<T>) {
  const {field, fieldState} = useController({control, name});
  if (fieldState.error?.message) {
    console.warn(fieldState.error?.message);
  }
  return (
    <View style={styles.container}>
      <RnTextInput
        onBlur={() => field.onBlur()}
        autoCapitalize="none"
        textAlign="left"
        style={styles.input}
        value={field.value}
        onChangeText={value => field.onChange(value)}
        {...restProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    justifyContent: 'center',
    padding: 8,
    borderWidth: 1,
  },
  label: {
    margin: 20,
    marginLeft: 0,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderColor: 'black',
  },
  errorContainer: {},
  error: {},
});
