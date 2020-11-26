import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#36B1F0',
    marginBottom: 1,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export function RowItem({ onPress = () => {}, name, color }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.row, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
