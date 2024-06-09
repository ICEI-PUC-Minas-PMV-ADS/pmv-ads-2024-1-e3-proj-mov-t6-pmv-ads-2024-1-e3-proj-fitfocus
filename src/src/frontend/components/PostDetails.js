import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PostDetails = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Image source={post.image} style={styles.postImage} />
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postTag}>Tag: {post.tag}</Text>
      <Text style={styles.postAuthor}>Autor: {post.author}</Text>
      <Text style={styles.postContent}>{post.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E9D1',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postTag: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 5,
  },
  postAuthor: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default PostDetails;
