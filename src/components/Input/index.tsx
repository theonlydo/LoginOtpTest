import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './style';

interface InputProps {
  placeholder?: string;
  onChangeText: () => void;
  value: string;
  errorText: string;
  isPassword?: boolean;
}

const Input = (props: InputProps) => {
  const {
    placeholder,
    onChangeText,
    value = '',
    errorText = '',
    isPassword,
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        secureTextEntry={isPassword}
      />
      {errorText !== '' && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default Input;
