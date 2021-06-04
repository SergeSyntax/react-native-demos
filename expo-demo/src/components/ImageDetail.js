import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageDetail = ({ title, source, score }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
      <Image source={source} />
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
