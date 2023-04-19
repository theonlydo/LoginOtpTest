import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {Input, Button} from '@app/components';
import {validateEmail, validatePassword} from '@app/utils';
import {NAVIGATION_LOGIN} from '@app/constants';
import {ScrollView} from 'react-native-gesture-handler';

const RegisterScreen = props => {
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

  const onChangePassword = text => {
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

  const onChangeEmail = text => {
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

  const navigateToRegister = () => {
    navigation.navigate(NAVIGATION_LOGIN);
  };

  const navigateToOtp = () => {
    navigation.navigate('as');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <Input
          placeholder="Name"
          onChangeText={onChangeEmail}
          value={email.value}
          errorText={email.errorMessage}
        />
        <Input
          placeholder="Email"
          onChangeText={onChangeEmail}
          value={email.value}
          errorText={email.errorMessage}
        />
        <Input
          placeholder="Phone Number"
          onChangeText={onChangeEmail}
          value={email.value}
          errorText={email.errorMessage}
        />
        <Input
          placeholder="Password"
          value={password.value}
          onChangeText={onChangePassword}
          errorText={password.errorMessage}
          isPassword
        />
        <Pressable onPress={navigateToRegister}>
          <Text style={styles.textLogin}>
            Already have an account? Register here
          </Text>
        </Pressable>
      </ScrollView>
      <Button title="Register" disabled={!isValid} onPress={navigateToOtp} />
    </View>
  );
};

export default RegisterScreen;
