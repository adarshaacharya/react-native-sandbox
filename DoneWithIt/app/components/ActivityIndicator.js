import LottieView from 'lottie-react-native';
import React from 'react';

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require('../assets/animations/loader.json')}
    />
  );
};

export default ActivityIndicator;
