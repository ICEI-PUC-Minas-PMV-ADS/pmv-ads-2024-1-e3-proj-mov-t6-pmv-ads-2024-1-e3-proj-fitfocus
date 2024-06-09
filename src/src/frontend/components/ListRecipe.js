import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Footer from './footer';
import { useAuth } from '../auth/AuthContext';
import { useNavigation } from '@react-navigation/native';

const RecipeListScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipesData, setRecipesData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [refreshing, setRefreshing] = useState(false); // Estado para controlar o recarregamento
  const Buffer = require("buffer").Buffer;

  const { onLogout } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://api-fit-61np.onrender.com/api/v1/recipe');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipesData(data); // Define os dados das receitas no estado
        setFilteredRecipes(data); // Inicialmente, exibe todas as receitas
        setLoading(false); // Define o estado de carregamento como false após obter os dados
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
        setLoading(false); // Define o estado de carregamento como false em caso de erro
      }
    };

    fetchRecipes();
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = recipesData.filter(recipe =>
      recipe.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const navigateToDetailReceita = (id) => {
    navigation.navigate('DetailReceita', { id }); // Passando o ID como parâmetro
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar receitas..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
        <Text style={styles.title}>Lista de Receitas</Text>
        {loading ? (
          <Text>Carregando...</Text>
        ) : (
          <FlatList
            data={filteredRecipes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.recipeContainer}
                onPress={() => navigateToDetailReceita(item.id)}
              >
                <ImageBackground source={{ uri: Buffer.from(item.image, 'base64').toString('utf8') }} style={styles.recipeImage}>
                  <View style={styles.recipeContent}>
                    <Text style={styles.recipeTitle}>{item.title}</Text>
                    <Text style={styles.recipeDescription}>{item.description}</Text>
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
  recipeImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden', // Para garantir que a imagem não ultrapasse os limites do contêiner
  },
  recipeContainer: {
    marginBottom: 20,
    borderRadius: 8,
  },
  recipeContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  recipeDescription: {
    fontSize: 16,
    color: 'white',
  },
});

export default RecipeListScreen;
