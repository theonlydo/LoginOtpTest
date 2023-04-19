import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NAVIGATION_LOGIN,
  NAVIGATION_HOME,
  NAVIGATION_REGISTER,
  NAVIGATION_OTP,
} from '../constants';
import {HomeScreen, LoginScreen, OtpScreen, RegisterScreen} from '@app/screens';
import {useSelector} from 'react-redux';
import {UserState} from '@app/data';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const user: UserState = useSelector((state: any) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        /*
        initialRouteName={
          user.accessToken === '' ? NAVIGATION_LOGIN : NAVIGATION_HOME
        }*/
        screenOptions={({}) => ({
          //...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}>
        <Stack.Screen name={NAVIGATION_OTP} component={OtpScreen} />
        <Stack.Screen name={NAVIGATION_LOGIN} component={LoginScreen} />
        <Stack.Screen name={NAVIGATION_HOME} component={HomeScreen} />
        <Stack.Screen name={NAVIGATION_REGISTER} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
