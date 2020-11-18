import React from 'react';
import { View, Text, Button } from 'react-native';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Press count : {this.state.count}</Text>

        <Button
          title="Click me baby"
          onPress={() =>
            this.setState((state) => {
              return {
                count: state.count + 1,
              };
            })
          }
        />
      </View>
    );
  }
}

export default Example;
