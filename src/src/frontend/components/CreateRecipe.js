import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';
import { HttpStatusCode } from 'axios';

const TOKEN_KEY = 'my-jwt'; // Chave para armazenar o token no SecureStore

export default function CreateRecipe({ navigation }) {
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageBase64(result.assets[0].base64);
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  function escapeStringForJSON(str) {
    return str
      .replace(/\\/g, '\\\\')  // Escapa barras invertidas
      .replace(/"/g, '\\"')    // Escapa aspas duplas
      .replace(/\n/g, '\\n')   // Escapa quebras de linha
      .replace(/\r/g, '\\r')   // Escapa retornos de carro
      .replace(/\t/g, '\\t');  // Escapa tabulações
  }

  const handleAddRecipe = async () => {
    setLoading(true);
    setMessage('Enviando...');
    console.log("testeenviandoreceita")
    try {
      if (!imageBase64) {
        throw new Error('Nenhuma imagem selecionada.');
      }

      const token = await SecureStore.getItemAsync(TOKEN_KEY);

      const body = JSON.stringify({
        image: imageBase64,
        title: title,
        bodyText: escapeStringForJSON(bodyText),
        calories: calories,
      });

      console.log(body)


      const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/recipe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: body
      });

      console.log(response)

      if (response.status != HttpStatusCode.Created) {
        throw new Error('Falha ao adicionar a receita');
      }

      setTitle('');
      setBodyText('');
      setCalories('');
      setImage(null);
      setImageBase64(null);
      setMessage('Receita adicionada com sucesso!');
      navigation.navigate('Home'); // Navegar para a página inicial após o sucesso
    } catch (error) {
      setMessage('Erro ao adicionar receita: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.postContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#463529" />
          </TouchableOpacity>
          <Text style={styles.title}>Adicione a sua receita</Text>
          <TextInput
            placeholder="Título"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Texto da Receita"
            style={[styles.input, styles.contentInput]}
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
          <TouchableOpacity style={styles.sendButton} onPress={handleAddRecipe} disabled={loading}>
            <Ionicons name="send" size={22} color="#42342a" />
          </TouchableOpacity>
          {loading && <ActivityIndicator size="large" color="#42342a" />}
          <Text style={styles.message}>{message}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F9E9D1',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  postContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#463529',
    textAlign: 'center',
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
  contentInput: {
    height: 'auto',
    textAlignVertical: 'top',
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
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 5,
  },
  sendButton: {
    backgroundColor: '#DAAC7C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#463529',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
