import {ParamListBase, RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {RootStackParamList} from '../../App';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

interface PropsNew<RouteName extends keyof RootStackParamList> {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
}

const EditScreen: React.FC<PropsNew<'Edit'>> = ({navigation, route}) => {
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find(blog => blog.id === route.params.id);

  return (
    <View>
      <BlogPostForm
        initialValues={blogPost}
        onSubmit={payload => {
          editBlogPost(route.params.id, payload.title, payload.content, () =>
            navigation.pop(),
          );
        }}
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
