import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {NAVIGATION_LOGIN} from '@app/constants';
import {UserState, setLogout} from '@app/data';

const HomeScreen = (props: any) => {
  const {navigation} = props;

  const userState: UserState = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const onPressLogout = async () => {
    dispatch(setLogout());
    navigation.replace(NAVIGATION_LOGIN);
  };

  return (
    <View style={styles.container}>
      {userState.image === '' ? (
        <View style={styles.img} />
      ) : (
        <Image source={{uri: userState.image}} style={styles.img} />
      )}
      <Text style={styles.title}>{`Welcome, ${userState.name}`}</Text>
      <Pressable onPress={onPressLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
