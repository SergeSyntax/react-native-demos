import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter((prevState) => prevState + 1)} />
      <Button title="decrease" onPress={() => setCounter((prevState) => prevState - 1)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
