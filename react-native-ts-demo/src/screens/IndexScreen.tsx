import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParamList} from '../../App';
import {Context} from '../context/BlogContext';

type ShowScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Index'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Index'>;

interface Props {
  navigation: ShowScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const IndexScreen: React.FC<Props> = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPosts} = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('focus', () => {
      getBlogPosts();
    });

    return () => {
      navigation.removeListener(listener);
    };
  }, []);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Icon name="add" size={30} />
      </TouchableOpacity>
    ),
  });

  return (
    <FlatList
      data={state}
      keyExtractor={blogPost => blogPost.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Show', {id: item.id})}>
          <View style={styles.row}>
            <Text style={styles.title}>
              {item.title}-{item.id}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Icon name="delete" type="antdesign" size={24} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
});
