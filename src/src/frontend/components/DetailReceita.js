import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, StatusBar, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../auth/AuthContext';
import { HttpStatusCode } from 'axios';

const AlturaStatusBar = StatusBar.currentHeight;

const DetailReceita = () => {
  const { onLogout } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const [recipe, setRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [calories, setCalories] = useState('');
  const { id } = route.params; // Obtendo o ID da receita dos parâmetros de rota

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/recipe/${id}`);

        if (!response) {
          throw new Error('Failed to fetch recipe details');
        }

        const data = await response.json();
        setRecipe(data); // Define os detalhes da receita no estado
        setTitle(data.title);
        setBodyText(data.bodyText);
        setCalories(data.calories);
      } catch (error) {
        console.error('Error fetching recipe details:', error.message);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const handleDeleteRecipe = async () => {
    try {
      const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/recipe/${id}`, {
        method: 'DELETE',
      });

      if (response.status !== HttpStatusCode.Gone) {
        throw new Error('Failed to delete recipe');
      }
      navigation.goBack(); // Volta para a tela anterior após deletar
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
    }
  };

  const handleUpdateRecipe = async () => {
    try {
      const updatedRecipe = {
        ...recipe,
        title,
        bodyText,
        calories
      };

      const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/recipe/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRecipe),
      });

      console.log(response)
      if (response.status !== HttpStatusCode.Ok) {
        throw new Error('Failed to update recipe');
      }

      const data = await response.json();
      setRecipe(data);
      setIsEditing(false);
      Alert.alert('Sucesso', 'Receita atualizada com sucesso!');
    } catch (error) {
      console.error('Error updating recipe:', error.message);
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar a receita');
    }
  };

  const formatTextWithLineBreaks = (text) => {
    const lines = text.replace(/\\n/g, '\n').split('\n');
    
    return lines.map((line, index) => (
      <Text key={index} style={styles.recipeBodyText}>{line}</Text>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={28}
          color="#463529"
          onPress={() => navigation.goBack()}
        />
        <IconButton
          icon={isEditing ? "content-save" : "pencil"}
          size={28}
          color="#463529"
          onPress={() => {
            if (isEditing) {
              handleUpdateRecipe();
            } else {
              setIsEditing(true);
            }
          }}
        />
        <IconButton
          icon="delete"
          size={28}
          color="#463529"
          onPress={handleDeleteRecipe}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        {recipe ? (
          <View style={styles.recipeContainer}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
              />
            ) : (
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
            )}
            {isEditing ? (
              <TextInput
                style={[styles.input, styles.textArea]}
                value={bodyText}
                onChangeText={setBodyText}
                multiline
              />
            ) : (
              formatTextWithLineBreaks(recipe.bodyText)
            )}
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={calories}
                onChangeText={setCalories}
                keyboardType="numeric"
              />
            ) : (
              <Text style={styles.recipeCalories}>Calorias: {recipe.calories}</Text>
            )}
          </View>
        ) : (
          <Text style={styles.placeholderText}>Carregando...</Text>
        )}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F9E9D1',
  },
  recipeContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  recipeImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#463529',
    textAlign: 'center',
  },
  recipeBodyText: {
    fontSize: 18,
    color: '#808080',
    marginBottom: 10,
    textAlign: 'center',
  },
  recipeCalories: {
    fontSize: 18,
    color: '#808080',
    textAlign: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#808080',
    paddingHorizontal: 20,
    textAlign: 'center',
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
});

export default DetailReceita;
