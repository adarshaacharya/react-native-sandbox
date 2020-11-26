import React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#ff4136',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleCorrect: {
    backgroundColor: '#28A125',
  },
  icon: {
    width: screen.width / 3,
  },
});

export const Alert = ({ correct, visible }) => {
  if (!visible) return null;
  
  const icon = correct
    ? require('../assets/check.png')
    : require('../assets/close.png');

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect); // push the bgcolor property in the array
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
