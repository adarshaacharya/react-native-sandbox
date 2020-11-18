import React, { Children } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex : 1
  },
});
export default Screen;
