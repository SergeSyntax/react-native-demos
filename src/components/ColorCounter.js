import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorCounter = ({ color, onChange }) => {
  const STEP = 40,
    MIN = 0,
    MAX = 255;

  const onIncrease = () =>
    onChange((prevState) => (prevState + STEP > MAX ? prevState : prevState + STEP));
  const onDecrease = () =>
    onChange((prevState) => (prevState + STEP < MIN ? prevState : prevState - STEP));

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
