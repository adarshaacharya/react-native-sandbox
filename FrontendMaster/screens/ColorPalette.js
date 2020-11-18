import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        keyExtractor={(item) => item.colorName}
        data={colors}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.title}>Solarized Colors</Text>}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  yellow: {
    backgroundColor: '#ffff00',
    padding: 10,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
