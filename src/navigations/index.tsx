import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION_LOGIN, NAVIGATION_HOME} from '../constants';
import {HomeScreen, LoginScreen} from '../screens';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({}) => ({
          //...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}>
        <Stack.Screen name={NAVIGATION_LOGIN} component={LoginScreen} />
        <Stack.Screen name={NAVIGATION_HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
