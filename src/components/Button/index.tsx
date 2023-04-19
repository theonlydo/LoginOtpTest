import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import {appColors} from '@app/themes';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const {title, onPress, disabled} = props;

  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: disabled ? appColors.gray100 : appColors.primary},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
