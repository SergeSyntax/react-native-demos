import React from 'react';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => setColors((prevState) => [...prevState, randomRgb()])}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const randomColor = () => Math.floor(Math.random() * 256);
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
