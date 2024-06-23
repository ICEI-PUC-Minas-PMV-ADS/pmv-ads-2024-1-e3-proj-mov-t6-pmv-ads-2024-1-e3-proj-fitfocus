import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, StatusBar, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../auth/AuthContext';
import { HttpStatusCode } from 'axios';

const AlturaStatusBar = StatusBar.currentHeight;

const DetailPost = () => {
  const { onLogout } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [calories, setCalories] = useState('');
  const { id } = route.params;

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/post/${id}`);
        if (!response) {
          throw new Error('Failed to fetch post details');
        }
        const data = await response.json();
        setPost(data);
        setTitle(data.title);
        setBodyText(data.bodyText);
        setCalories(data.calories);
      } catch (error) {
        console.error('Error fetching post details:', error.message);
      }
    };
    fetchPostDetails();
  }, [id]);

  const handleDeletePost = async () => {
    try {
      const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/post/${id}`, {
        method: 'DELETE',
      });
      if (response.status !== HttpStatusCode.Gone) {
        throw new Error('Failed to delete post');
      }
      navigation.goBack();
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  const handleUpdatePost = async () => {
    try {
      const updatedPost = { ...post, title, bodyText, calories };
      const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/post/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      });

      console.log(response)
      if (response.status !== HttpStatusCode.Ok) {
        throw new Error('Failed to update post');
      }
      const data = await response.json();
      setPost(data);
      setIsEditing(false);
      Alert.alert('Sucesso', 'Post atualizado com sucesso!');
    } catch (error) {
      console.error('Error updating post:', error.message);
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar o post');
    }
  };

  const formatTextWithLineBreaks = (text) => {
    const lines = text.replace(/\\n/g, '\n').split('\n');
    
    return lines.map((line, index) => (
      <Text key={index} style={styles.blogBodyText}>{line}</Text>
    ));
  };

  if (!post) {
    return (
      <View style={styles.container}>
        <Text style={styles.placeholderText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.header}>
          <IconButton
            icon="arrow-left"
            size={28}
            color="#463529"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
          <Text style={styles.blogTitle}>{post.title}</Text>
          <View style={styles.headerButtons}>
            <IconButton
              icon={isEditing ? "content-save" : "pencil"}
              size={28}
              color="#463529"
              onPress={() => {
                if (isEditing) {
                  handleUpdatePost();
                } else {
                  setIsEditing(true);
                }
              }}
            />
            <IconButton
              icon="delete"
              size={28}
              color="#463529"
              onPress={handleDeletePost}
            />
          </View>
        </View>
        <Image source={{ uri: `data:image/jpeg;base64,${post.image}` }} style={styles.postImage} />
        <View style={styles.blogContent}>
          {isEditing ? (
            <>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
              />
              <TextInput
                style={[styles.input, styles.textArea]}
                value={bodyText}
                onChangeText={setBodyText}
                multiline
              />
            </>
          ) : (
            formatTextWithLineBreaks(post.bodyText)
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E9D1',
    paddingTop: AlturaStatusBar + 20,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  postImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  blogTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#463529',
    textAlign: 'center',
  },
  blogContent: {
    paddingHorizontal: 20,
  },
  blogBodyText: {
    fontSize: 18,
    color: '#463529',
    marginBottom: 20,
    textAlign: 'justify',
  },
  blogCalories: {
    fontSize: 18,
    color: '#463529',
    textAlign: 'right',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#463529',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 18,
    color: '#463529',
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 100,
  },
  placeholderText: {
    fontSize: 18,
    color: '#808080',
    paddingHorizontal: 20,
    textAlign: 'center',
    marginTop: '50%',
  },
});

export default DetailPost;
