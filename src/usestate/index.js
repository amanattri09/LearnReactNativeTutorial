import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export default UseState = () => {
  const [count, setCount] = useState(0);
  let showError = true;

  return (
    <View>
      <Text>just Testing Count is {count}</Text>
      <Counter />
      <Button title="press me" onPress={() => setCount(count + 1)}></Button>
    </View>
  );
};

const Counter = () => {
  return <Text>Counter{console.warn('counter is loading ')}</Text>;
};
