import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Sorjo';
  return (
    <View>
      <Text style={Styles.mainHeaderStyle}>Getting started with react native!!</Text>
      <Text style={Styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainHeaderStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
