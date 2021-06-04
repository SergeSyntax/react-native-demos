import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}/>
      <View style={styles.viewTwoStyle}/>
      <View style={styles.viewThreeStyle}/>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    flexDirection: 'row',
  },
  viewOneStyle: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#ffaaaa',
    borderColor: 'red',
    marginBottom: 90,
  },
  viewTwoStyle: {
    flex: 1.2,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#aaffaa',
    marginTop: 90,
    marginHorizontal: 40,
  },
  viewThreeStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: '#C496EF',
    marginBottom: 90,
  },
});
