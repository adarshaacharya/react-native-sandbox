import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(25,255,255,0.3)',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export const Button = ({ text, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonContainer = ({ children }) => {
  return <View style={styles.buttonContainer}>{children}</View>;
};
