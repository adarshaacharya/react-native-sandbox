// Styling
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#7ce056',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgBlue: {
    backgroundColor: 'skyblue',
  },
  bgYellow: {
    backgroundColor: 'yellow',
  },
});

function Square({ text, backgroundColor }) {
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Text> {text}</Text>
    </View>
  );
}

export default () => {
  return (
    <View style={styles.container}>
      <Square text="Square One" backgroundColor="pink" />
      <Square text="Square Two" backgroundColor="#4dc2c2" />
      <Square text="Square Three" backgroundColor="#ff622c" />
    </View>
  );
};
