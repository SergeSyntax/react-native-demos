import React, {useState, useEffect, Fragment} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import {Text} from 'react-native';
import useResults from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('pasta');
  const [searchApi, restaurants, error] = useResults(term);
  const filterResultsByPrice = price => {
    return restaurants.filter(result => result.price === price);
  };

  // console.log(results);
  return (
    <Fragment>
      <SearchBar
        value={term}
        onChange={setTerm}
        onEndEditing={() => searchApi(term)}
      />
      {Boolean(error) && <Text>{error}</Text>}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList
          title="Big Pricier"
          results={filterResultsByPrice('$$')}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </Fragment>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
