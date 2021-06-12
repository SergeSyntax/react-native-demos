import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = props => {
  const [restaurant, setRestaurant] = useState(null);
  const id = props.route.params.id;

  useEffect(() => {
    const getRestaurant = async () => {
      const {data} = await yelp.get(`/${id}`);
      setRestaurant(data);
    };

    getRestaurant();
  }, []);

  if (!restaurant) return null;

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item}} />
        )}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({image: {height: 200, width: 300}});
