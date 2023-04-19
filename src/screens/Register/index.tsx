import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {Input, Button} from '@app/components';
import {validateEmail, validatePassword} from '@app/utils';
import {NAVIGATION_LOGIN, NAVIGATION_OTP} from '@app/constants';
import {ScrollView} from 'react-native-gesture-handler';
import {postLogin} from '@app/data';
import {useDispatch} from 'react-redux';

const RegisterScreen = (props: any) => {
  const {navigation} = props;

  const dispatch = useDispatch();

  const [name, setName] = useState({
    value: '',
    isValid: false,
    errorMessage: '',
  });
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    errorMessage: '',
  });
  const [phone, setPhone] = useState({
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

  /*
   * Validation
   */

  const onChangeName = (text: string) => {
    setName({
      value: text,
      isValid: text.length > 3,
      errorMessage: text.length > 3 ? '' : 'Too short',
    });
  };

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

  const onChangePhone = (text: string) => {
    const isPhoneValid = text.length > 7;

    setPhone({
      value: text,
      isValid: isPhoneValid,
      errorMessage: isPhoneValid ? '' : 'Invalid',
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

  /*
   * APIs Call
   */
  const onSubmitData = async () => {
    const payload = {
      email: email.value,
      password: password.value,
    };

    await dispatch(postLogin(payload));

    navigateToOtp();
  };

  const navigateToRegister = () => {
    navigation.navigate(NAVIGATION_LOGIN);
  };

  const navigateToOtp = () => {
    navigation.navigate(NAVIGATION_OTP);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <Input
          placeholder="Name"
          onChangeText={onChangeName}
          value={name.value}
          errorText={name.errorMessage}
        />
        <Input
          placeholder="Email"
          value={email.value}
          onChangeText={onChangeEmail}
          keybordType="email-address"
          errorText={email.errorMessage}
        />
        <Input
          placeholder="Phone Number"
          value={phone.value}
          onChangeText={onChangePhone}
          errorText={phone.errorMessage}
          keybordType="phone-pad"
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
            Already have an account? Login here
          </Text>
        </Pressable>
      </ScrollView>
      <Button title="Register" disabled={!isValid} onPress={onSubmitData} />
    </View>
  );
};

export default RegisterScreen;
