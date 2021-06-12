import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {RouteProp} from '@react-navigation/core';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

type CreateScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Create'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Create'>;

interface Props {
  navigation: CreateScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const CreateScreen: React.FC<Props> = ({navigation, route}) => {
  const {addBlogPost} = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={payload => {
        addBlogPost(payload.title, payload.content, () =>
          navigation.navigate('Index'),
        );
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
