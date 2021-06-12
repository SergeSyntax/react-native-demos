import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorCounter = ({ color, dispatch }) => {
  const STEP = 40,
    MIN = 0,
    MAX = 255;

  const onIncrease = () =>  dispatch({ type: color, payload: STEP });
  const onDecrease = () =>  dispatch({ type: color, payload: -STEP });
  
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
