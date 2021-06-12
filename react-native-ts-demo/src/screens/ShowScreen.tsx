import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {RouteProp} from '@react-navigation/core';
import {Context} from '../context/BlogContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements/dist/icons/Icon';

type ShowScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Show'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Show'>;

interface Props {
  navigation: ShowScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const ShowScreen: React.FC<Props> = ({navigation, route}) => {
  const {state} = useContext(Context);
  const {id} = route.params;
  const blogPost = state.find(blog => blog.id === id);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
        <Icon name="edit" size={30} />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content || ''}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
