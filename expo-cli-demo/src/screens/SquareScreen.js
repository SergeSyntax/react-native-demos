import React, { useReducer } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import _ from 'lodash';

const types = {
  red: 'RED',
  green: 'GREEN',
  blue: 'BLUE',
};

const reducer = (state, { type, payload }) => {
  const colorIndex = type.toLowerCase();
  const colorValue = state[colorIndex] + payload;

  if (colorValue > 255 || colorValue < 0) return state;

  if (types.hasOwnProperty(colorIndex)) return { ...state, [colorIndex]: colorValue };

  return state;
};

const SquareScreen = () => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  const initialState = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <ColorCounter color={types.red} dispatch={dispatch} />
      <ColorCounter color={types.green} dispatch={dispatch} />
      <ColorCounter color={types.blue} dispatch={dispatch} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
