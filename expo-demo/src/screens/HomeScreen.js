import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hey There!</Text>
      <Button
        style={styles.text}
        title="got to components demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        style={styles.text}
        title="got to list demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        style={styles.text}
        title="got to image demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        style={styles.text}
        title="got to counter demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        style={styles.text}
        title="got to color demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        style={styles.text}
        title="got to square demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        style={styles.text}
        title="got to text demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        style={styles.text}
        title="got to box text"
        onPress={() => navigation.navigate('Box')}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
  },
});

export default HomeScreen;
