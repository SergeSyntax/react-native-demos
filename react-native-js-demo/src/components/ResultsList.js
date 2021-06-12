import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, onSelect}) => {
  const {navigate} = useNavigation();

  if (!results.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigate('ResultsShow', {id: item.id})}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  container: {marginBottom: 10},
  title: {fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginBottom: 10},
});
