import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Input, Button} from '@app/components';
import {validateEmail, validatePassword} from '@app/utils';

const LoginScreen = (props: any) => {
  const {navigation} = props;

  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    errorMessage: '',
  });
  const [password, setPassword] = useState({
    value: '',
    isValid: false,
    errorMessage: '',
  });
  const isValid = password.isValid && email.isValid;

  const onChangePassword = (text: string) => {
    const passValidation = validatePassword(text);
    let errorMsg = '';

    if (!passValidation.isValid) {
      errorMsg = passValidation.errors[0];
    }

    setPassword({
      value: text,
      isValid: passValidation.isValid,
      errorMessage: errorMsg,
    });
  };

  const onChangeEmail = (text: string) => {
    const isValidEmail = validateEmail(text);

    let errorMsg = '';
    if (!isValidEmail) {
      errorMsg = 'Invalid email';
    }

    setEmail({
      value: text,
      isValid: isValidEmail,
      errorMessage: errorMsg,
    });
  };

  const navigateToOtp = () => {
    navigation.navigate('as');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          placeholder="Input Email"
          onChangeText={onChangeEmail}
          value={email.value}
          errorText={email.errorMessage}
        />
        <Input
          placeholder="Input Password"
          value={password.value}
          onChangeText={onChangePassword}
          errorText={password.errorMessage}
          isPassword
        />
      </View>
      <Button title="Login" disabled={!isValid} onPress={navigateToOtp} />
    </View>
  );
};

export default LoginScreen;
