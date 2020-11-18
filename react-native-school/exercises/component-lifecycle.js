import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { listener2 } from '../support/component-lifecycle';

export default () => {
  const [updateCount, setUpdateCount] = useState(0);
  const [listenerName, setListenerName] = useState('Cat');

  useEffect(() => {
    setUpdateCount(0);
    const unsubscribe = listener2(listenerName, () => {
      setUpdateCount((currentCount) => currentCount + 1);
    });

    return () => {
      unsubscribe();
    };
  }, [listenerName]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>The listener has updated {updateCount} time(s).</Text>
      <Text>Currently listening to {listenerName} listener</Text>
      <Button
        title={`Click me I'm ${listenerName}`}
        onPress={() => {
          if (listenerName === 'Cat') {
            setListenerName('Dog');
          } else {
            setListenerName('Cat');
          }
        }}
      />
    </View>
  );
};
