// Capturing User Taps
import React from 'react';
import { Alert, Button, Text, TouchableOpacity, View } from 'react-native';
// TIP: Button is a component exposed by React Native. You'll import it the same way you did View
// and Text previously.

export default () => {
  // Replace return null with your code.
  return (
    <View>
      <Button
        title="Button 1"
        onPress={() => Alert.alert('Hello apil gay')}
      />

      <TouchableOpacity
        onPress={() => Alert.alert('Simple Button pressed')}
        style={{
          alignItems: 'center',
          backgroundColor: 'blue',
          padding: 10,
          alignSelf: 'center',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}
        >
          Touchable Button
        </Text>
      </TouchableOpacity>
    </View>
  );
};
