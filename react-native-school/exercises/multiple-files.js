import React from 'react';
import { View } from 'react-native';
import { Button } from './button-component';

export default () => (
  <View style={{ marginTop: 20 }}>
    <Button text="Say hello" onPress={() => alert('hello!')} />
  </View>
);
