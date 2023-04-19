import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import {OTP} from '@app/components';
import {NAVIGATION_HOME} from '@app/constants';

const OtpScreen = (props: any) => {
  const {navigation} = props;

  const [otpValue, setOtpValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const canResend = minutes === 0 && seconds === 0;

  useEffect(() => {
    onSendOtp();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        console.log(seconds);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const navigateToDashboard = () => {
    navigation.reset({
      index: 0,
      routes: [{name: NAVIGATION_HOME}],
    });
  };

  const onChangeOtp = (value: string) => {
    setOtpValue(value);
    if (value.length === 6) {
      if (value === '111111') {
        navigateToDashboard();
      } else {
        Alert.alert('Invalid OTP');
      }
      setOtpValue('');
    }
  };

  const onSendOtp = () => {
    setMinutes(0);
    setSeconds(30);
    Alert.alert('OTP sent to your phone');
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
        canResend={canResend}
        value={otpValue}
        minutes={minutes}
        seconds={seconds}
        onPressResend={onSendOtp}
        onChangeInputNumber={onChangeOtp}
      />
    </View>
  );
};

export default OtpScreen;
