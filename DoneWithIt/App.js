import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Text } from 'react-native';
import Screen from './app/components/Screen';
import AppNavigator from './app/navigation/AppNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';



export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
