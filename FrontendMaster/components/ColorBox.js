import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
    padding: 15,
    marginBottom: 10,
  };
  return (
    <View>
      <View style={[boxColor]}>
        <Text style={styles.boxText}>
          {colorName}: {hexCode}
        </Text>
      </View>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginVertical: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
