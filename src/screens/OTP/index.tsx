import React, {useState} from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {OTP} from '@app/components';

const OtpScreen = () => {
  const [otpValue, setOtpValue] = useState('');

  const onChangeOtp = value => {
    setOtpValue(value);
    if (value.length === 6) {
      if (value === '111111') {
        alert('valid');
      } else {
        alert('invalid');
      }
      setOtpValue('');
    }
  };

  const _renderTitle = () => {
    return (
      <>
        <Text style={styles.textTitle}>Enter authentication code</Text>
        <Text style={styles.textSubtitle}>
          Enter the 6-digits that we have sent via the phone number to{' '}
          <Text style={[styles.textSubtitle, styles.textBold]}>
            +62 853 - 6590 - 8242
          </Text>
        </Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {_renderTitle()}
      <OTP
        value={otpValue}
        onPressResend={() => {}}
        onChangeInputNumber={onChangeOtp}
      />
    </View>
  );
};

export default OtpScreen;
