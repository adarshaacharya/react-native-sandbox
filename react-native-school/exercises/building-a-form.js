import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name ?</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Apil Gandu"
        placeholderTextColor="rgba(0,0,0,0.5)"
      />
      <Button
        title="Submit"
        onPress={() => {
          Alert.alert(`Lodu Apil ka beta ${value}!`);
          onChangeText('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
