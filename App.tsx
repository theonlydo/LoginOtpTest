/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootNavigation from './src/navigations';
import {SafeAreaView, StatusBar, useColorScheme, LogBox} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Loading from '@app/components/Loading';
import {useSelector} from 'react-redux';
import {AppState} from '@app/data';

const Application = () => {
  const appState: AppState = useSelector((state: any) => state.app);

  LogBox.ignoreLogs(['Remote debugger']);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootNavigation />
      {appState.loading && <Loading />}
    </SafeAreaView>
  );
};

export default Application;
