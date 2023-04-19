import React, {useRef} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {pad} from '@app/utils';
import styles from './styles';
import {appColors} from '@app/themes';

interface OTPProps {
  value: string;
  canResend: boolean;
  onPressResend: () => void;
  onChangeInputNumber: any;
  minutes: number;
  seconds: number;
}

const OTP = (props: OTPProps) => {
  const {
    value = '',
    canResend,
    minutes,
    seconds,
    onPressResend,
    onChangeInputNumber,
  } = props;

  const inputReff = useRef();

  const onPressCircle = () => {
    inputReff.current.focus();
  };

  const _renderNumber = (num = []) => {
    return num.map((e, index) => {
      const isFocus = value.length === index;
      return (
        <View
          key={index}
          style={[
            styles.circle,
            isFocus ? styles.circleFocus : styles.circleNormal,
          ]}>
          <Text style={styles.number}>{e}</Text>
        </View>
      );
    });
  };

  const _renderCircle = () => {
    const numbers = ['', '', '', '', '', ''];
    const valArr = value.split('');

    if (value !== '') {
      numbers[0] = valArr[0] || '';
      numbers[1] = valArr[1] || '';
      numbers[2] = valArr[2] || '';
      numbers[3] = valArr[3] || '';
      numbers[4] = valArr[4] || '';
      numbers[5] = valArr[5] || '';
    }

    return (
      <Pressable style={styles.circleContainer} onPress={onPressCircle}>
        {_renderNumber(numbers)}
      </Pressable>
    );
  };

  const _renderInputNumber = () => {
    return (
      <TextInput
        style={styles.input}
        ref={inputReff}
        maxLength={6}
        value={value}
        keyboardType="number-pad"
        onChangeText={onChangeInputNumber}
        autoFocus
      />
    );
  };

  const _renderTimer = () => {
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.textTimer}>{`(${pad(minutes, 2)}:${pad(
          seconds,
          2,
        )})`}</Text>
        <Pressable onPress={onPressResend} disabled={!canResend}>
          <Text
            style={[
              styles.textResend,
              {color: canResend ? appColors.black : appColors.gray75},
            ]}>
            Resend Code
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {_renderCircle()}
        {_renderInputNumber()}
      </View>
      {_renderTimer()}
    </View>
  );
};

export default OTP;
