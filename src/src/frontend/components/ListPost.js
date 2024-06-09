import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Footer from './footer';
import { useAuth } from '../auth/AuthContext';
import { useNavigation } from '@react-navigation/native';

const ListPost = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [postsData, setPostsData] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { onLogout } = useAuth();
  const navigation = useNavigation();
  const Buffer = require("buffer").Buffer;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api-fit-61np.onrender.com/api/v1/post');
        if (!response) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPostsData(data);
        setFilteredPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = postsData.filter(post =>
      post.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const navigateToDetailPost = (id) => {
    navigation.navigate('DetailPost', { id });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search posts..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
        <Text style={styles.title}>Post List</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={filteredPosts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.postContainer}
                onPress={() => navigateToDetailPost(item.id)}
              >
                <ImageBackground source={{ uri: Buffer.from(item.image, 'base64').toString('utf8') }} style={styles.postImage}>
                  <View style={styles.postContent}>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <Text style={styles.postContentText}>{item.content}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E9D1',
  },
  content: {
    flex: 1, // O conteúdo deve ocupar todo o espaço disponível
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  postImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden', // Para garantir que a imagem não ultrapasse os limites do contêiner
  },
  postContainer: {
    marginBottom: 20,
    borderRadius: 8,
  },
  postContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  postContentText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ListPost;
