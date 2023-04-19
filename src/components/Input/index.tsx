import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './style';

interface InputProps {
  placeholder?: string;
  onChangeText: any;
  value: string;
  errorText: string;
  isPassword?: boolean;
  keybordType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

const Input = (props: InputProps) => {
  const {
    placeholder,
    onChangeText,
    value = '',
    errorText = '',
    isPassword,
    keybordType = 'default',
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
        keyboardType={keybordType}
      />
      {errorText !== '' && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default Input;
