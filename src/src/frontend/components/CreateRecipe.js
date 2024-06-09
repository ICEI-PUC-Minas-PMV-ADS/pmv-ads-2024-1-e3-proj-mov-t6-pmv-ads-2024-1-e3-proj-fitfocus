import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';
import { FileSystem } from 'expo-file-system';

const TOKEN_KEY = 'my-jwt'; // Chave para armazenar o token no SecureStore

export default function CreateRecipe() {
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [calories, setCalories] = useState('');
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

  const convertToBase64 = async (uri) => {
    try {
      // Lê o arquivo da imagem
      console.log(image);
      const fileContent = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
  
      // Converte o conteúdo do arquivo em base64
      return fileContent;
    } catch (error) {
      console.error('Erro ao converter imagem para base64:', error);
      return null;
    }
  };

  const handleAddRecipe = async () => {
    try {
      console.log(image);

      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const Buffer = require("buffer").Buffer;
      let base64Image = new Buffer(image).toString("base64");


      const formData = new FormData();
      formData.append('image', base64Image);
      formData.append('title', title);
      formData.append('bodyText', bodyText);
      formData.append('calories', calories);
      console.log(formData);

      const body = `{"image": "${base64Image}", "title": "${title}", "bodyText": "${bodyText}", "calories": "${calories}"}`;

      const response = await fetch(`https://api-fit-61np.onrender.com/api/v1/recipe`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: body
      });

      console.log(response);


      if (!response.ok) {
        throw new Error('Failed to add recipe');
      }

      // Limpa os campos após adicionar a receita
      setTitle('');
      setBodyText('');
      setCalories('');
      setImage(null);

      console.log('Receita adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar receita:', error.message);
      // Trate o erro de acordo com as necessidades da sua aplicação
    }
  };

  return (
    <View style={styles.postContainer}>
      <TextInput
        placeholder="Título"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Texto da Receita"
        style={styles.input}
        multiline
        value={bodyText}
        onChangeText={setBodyText}
      />
      <TextInput
        placeholder="Calorias"
        style={styles.input}
        value={calories}
        onChangeText={setCalories}
      />
      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImageAsync}>
        <Ionicons name="camera" size={22} color="#42342a" />
        <Text style={styles.imagePickerText}>Selecionar Imagem</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <TouchableOpacity style={styles.sendButton} onPress={handleAddRecipe}>
        <Ionicons name="send" size={22} color="#42342a" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 20,
    marginTop: '40%',
    borderRadius: 10,
    position: 'absolute',
    width: '80%',
    height: '70%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DAAC7C',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#F9E9D1',
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
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
    color: '#42342a',
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 5,
  },
  sendButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
