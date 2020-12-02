import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles';

const AppText = ({ children, style, ...props }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
