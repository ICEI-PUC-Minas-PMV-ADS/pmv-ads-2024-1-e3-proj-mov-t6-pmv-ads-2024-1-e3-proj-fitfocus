import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, StatusBar } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../auth/AuthContext';

const AlturaStatusBar = StatusBar.currentHeight;

const DetailReceita = () => {
  const { onLogout } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const [recipe, setRecipe] = useState(null);
  const { id } = route.params; // Obtendo o ID da receita dos parâmetros de rota
  console.log(id);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://api-fit-61np.onrender.com/api/v1/recipe/${id}`);
        console.log(response.data);

        if (!response) {
          throw new Error('Failed to fetch recipe details');
        }
        
        const data = await response.json();
        setRecipe(data); // Define os detalhes da receita no estado
      } catch (error) {
        console.error('Error fetching recipe details:', error.message);
      }
    };

    fetchRecipeDetails();
  }, [id]);

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
          icon="log-out"
          size={28}
          color="#463529"
          onPress={onLogout}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        {recipe ? (
          <View style={styles.recipeContainer}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text style={styles.recipeBodyText}>{recipe.bodyText}</Text>
            <Text style={styles.recipeCalories}>Calorias: {recipe.calories}</Text>
            {/* Aqui você pode renderizar outros detalhes da receita, como ingredientes, instruções, etc. */}
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
    marginBottom: 20,
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
});

export default DetailReceita;
