// Creating a Custom Component
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

function NativeButton({ text, onPress, buttonStyles }) {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: 'blue',
        alignSelf: 'center',
        borderColor: 'black',
        marginVertical: 40,
        ...buttonStyles,
      }}
      onPress={onPress}
    >
      <Text style={{ color: '#fff' }}>{text}</Text>
    </TouchableOpacity>
  );
}

export default () => {
  return (
    <View>
      <NativeButton
        color="red"
        text="First button"
        onPress={() => Alert.alert('Say hello')}
        buttonStyles={{
          backgroundColor: '#4dc2c2',
        }}
      />
      <NativeButton
        text="Second button"
        onPress={() => Alert.alert('Say goodbye')}
      />
    </View>
  );
};
