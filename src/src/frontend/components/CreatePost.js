import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';
import { FileSystem } from 'expo-file-system';

const TOKEN_KEY = 'my-jwt'; // Chave para armazenar o token no SecureStore

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, precisamos da permissão da câmera para isso funcionar!');
        }
      }
    })();
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const handleAddPost = async () => {
    try {
      if (!image) {
        // Verifica se a imagem foi selecionada
        throw new Error('Nenhuma imagem selecionada.');
      }
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const Buffer = require("buffer").Buffer;
    let base64Image = new Buffer(image).toString("base64");

      const formData = new FormData();
      formData.append('image', { uri: image, name: 'post_image.jpg', type: 'image/jpg' });
      formData.append('title', title);
      formData.append('bodyText', content);

      const body = `{"image": "${base64Image}", "title": "${title}", "bodyText": "${content}"}`;
      console.log(body + "adada");

      const response = await fetch(`https://api-fit-61np.onrender.com/api/v1/post`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: body
      });

      if (!response) {
        throw new Error('Falha ao adicionar o post');
      }

      // Limpa os campos após adicionar o post
      setTitle('');
      setContent('');
      setImage(null);

      console.log('Post adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar post:', error.message);
      // Trate o erro de acordo com as necessidades da sua aplicação
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Novo Post</Text>
      <TextInput
        placeholder="Título"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Conteúdo"
        style={[styles.input, styles.contentInput]}
        multiline
        value={content}
        onChangeText={setContent}
      />
      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImageAsync}>
        <Ionicons name="camera" size={22} color="#FFF" />
        <Text style={styles.imagePickerText}>Selecionar Imagem</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <TouchableOpacity style={styles.sendButton} onPress={handleAddPost}>
        <Ionicons name="send" size={22} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E9D1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#463529',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DAAC7C',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  contentInput: {
    height: 150,
  },
  imagePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAAC7C',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  imagePickerText: {
    marginLeft: 10,
    color: '#FFF',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 5,
  },
  sendButton: {
    backgroundColor: '#DAAC7C',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
});
