import React, {useRef} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';

interface OTPProps {
  value: string;
  onPressResend: () => void;
  onChangeInputNumber: any;
}

const OTP = (props: OTPProps) => {
  const {value = '', onPressResend, onChangeInputNumber} = props;

  const inputReff = useRef();

  const onPressCircle = () => {
    inputReff.current.focus();
  };

  const _renderNumber = (num = []) => {
    return num.map((e, index) => {
      const isFocus = value.length === index;
      return (
        <>
          <View
            style={[
              styles.circle,
              isFocus ? styles.circleFocus : styles.circleNormal,
            ]}>
            <Text style={styles.number}>{e}</Text>
          </View>
        </>
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
        <Text style={styles.textTimer}>(00:30)</Text>
        <Pressable onPress={onPressResend}>
          <Text style={styles.textResend}>Resend Code</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        {_renderCircle()}
        {_renderInputNumber()}
      </View>
      {_renderTimer()}
    </View>
  );
};

export default OTP;
