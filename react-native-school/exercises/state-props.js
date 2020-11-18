// Using State and Props

// useState is a hook that is a named export from React.
import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text>You've pressed the button: {count} time(s)</Text>
      <Button
        title={`Pressed ${count} times`}
        onPress={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      />
    </View>
  );
};
