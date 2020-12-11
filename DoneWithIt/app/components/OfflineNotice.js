import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet connection</AppText>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    top: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
