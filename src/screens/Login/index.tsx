import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Input} from '@app/components';
import Button from '@app/components/Button';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input placeholder="Masukkan Email" />
        <Input placeholder="Masukkan Email" />
      </View>
      <Button title="Login" />
    </View>
  );
};

export default LoginScreen;
