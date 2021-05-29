import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter color="Red" onChange={setRed} />
      <ColorCounter color="Blue" onChange={setGreen} />
      <ColorCounter color="Green" onChange={setBlue} />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
