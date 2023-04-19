import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
