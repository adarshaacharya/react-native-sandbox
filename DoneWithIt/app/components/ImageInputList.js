import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.length > 0 &&
            imageUris.map((uri) => (
              <View key={uri} style={styles.image}>
                <ImageInput
                  imageUri={uri}
                  key={uri}
                  onChangeImage={() => onRemoveImage(uri)} // if the image s already there then pass onRemoveImage as function where onChnageImage = handlePress
                />
              </View>
            ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
          {/* if there is not any image then don't pass imageUri 
        and pass onAddImage function where onChnageImage = handlePress
      */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
