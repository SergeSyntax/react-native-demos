import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" source={require('../assets/beach.jpg')} score={9} />
      <ImageDetail title="Beach" source={require('../assets/forest.jpg')} score={7} />
      <ImageDetail title="Mountain" source={require('../assets/mountain.jpg')} score={4} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
