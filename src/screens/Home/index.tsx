import React from 'react';
import {Pressable, Text, View} from 'react-native';

const HomeScreen = () => {
  const onPressLogout = () => {};

  return (
    <View>
      <Text>Hai Ridho</Text>
      <Pressable onPress={onPressLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
