import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
