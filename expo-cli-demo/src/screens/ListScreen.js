import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 11 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 31 },
    { name: 'Friend #4', age: 41 },
    { name: 'Friend #5', age: 51 },
    { name: 'Friend #6', age: 61 },
    { name: 'Friend #7', age: 71 },
    { name: 'Friend #8', age: 81 },
    { name: 'Friend #9', age: 91 },
    { name: 'Friend #10', age: 101 },
  ];

  return (
    <FlatList
      // horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item: { name, age } }) => (
        <Text style={styles.textStyle}>
          {name} - Age {age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 20,
  },
});

export default ListScreen;
