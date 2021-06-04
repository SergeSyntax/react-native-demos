import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>My name is {text}</Text>
      {text.length > 5 && <Text>must be more then 5 char long</Text>}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
