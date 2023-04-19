import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Input, Button} from '@app/components';
import {validateEmail, validatePassword} from '@app/utils';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const onChangePassword = (text: string) => {
    setPassword(text);
    const passValidation = validatePassword(text);

    if (!passValidation.isValid) {
      setErrPassword(passValidation.errors[0]);
    } else {
      setErrPassword('');
    }
  };

  const onChangeEmail = text => {
    setEmail(text);
    const isValid = validateEmail(text);
    if (!isValid) {
      setErrEmail('Invalid email');
    } else {
      setErrEmail('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          placeholder="Input Email"
          onChangeText={onChangeEmail}
          value={email}
          errorText={errEmail}
        />
        <Input
          placeholder="Input Password"
          value={password}
          onChangeText={onChangePassword}
          errorText={errPassword}
          isPassword
        />
      </View>
      <Button title="Login" disabled={!isFormValid} />
    </View>
  );
};

export default LoginScreen;
