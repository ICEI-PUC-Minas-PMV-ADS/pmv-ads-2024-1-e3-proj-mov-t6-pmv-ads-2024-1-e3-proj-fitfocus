import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from './footer';
import { useAuth } from '../auth/AuthContext';

const AlturaStatusBar = StatusBar.currentHeight;

const Home = () => {
  const { onLogout } = useAuth();
  const navigation = useNavigation();
  const [recipesData, setRecipesData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const Buffer = require("buffer").Buffer;
  const [refreshing, setRefreshing] = useState(false); // Estado para controlar o recarregamento

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://api-fit-61np.onrender.com/api/v1/recipe');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        console.log(data);
        setRecipesData(data); // Define os dados das receitas populares no estado
        setLoading(false); // Define o estado de carregamento como false após obter os dados
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
        setLoading(false); // Define o estado de carregamento como false em caso de erro
      }
    };

    const fetchPost = async () => {
      try {
        const response = await fetch('https://api-fit-61np.onrender.com/api/v1/post');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        console.log(data);
        setPostData(data); // Define os dados das receitas populares no estado
        setLoading(false); // Define o estado de carregamento como false após obter os dados
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
        setLoading(false); // Define o estado de carregamento como false em caso de erro
      }
    };

    
    fetchPost();
    fetchRecipes();
  }, []);

  const navigateToDetailReceita = (id) => {
    navigation.navigate('DetailReceita', { id }); // Passando o ID como parâmetro
  }

  const navigateToDetailPost = (id) => {
    navigation.navigate('DetailPost', { id }); // Passando o ID como parâmetro
  }

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetailReceita(item.id)}>
      <View style={styles.recipeContainer}>
        {typeof item.image === 'string' && (
          <Image source={{ uri: Buffer.from(item.image, 'base64').toString('utf8') }} style={styles.recipeImage} />
        )}
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <Text style={styles.recipeBodyText}>{item.bodyText}</Text>
        <Text style={styles.recipeCalories}>Calorias: {item.calories}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderpostItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetailPost(item.id)}>
      <View style={styles.recipeContainer}>
        {typeof item.image === 'string' && (
          <Image source={{ uri: Buffer.from(item.image, 'base64').toString('utf8') }} style={styles.recipeImage} />
        )}
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <Text style={styles.recipeBodyText}>{item.bodyText}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleRefresh = async () => {
    setRefreshing(true); // Define o estado de recarregamento como verdadeiro
    // Aqui você pode fazer uma nova solicitação para obter os dados mais recentes
    try {
      const response = await fetch('https://api-fit-61np.onrender.com/api/v1/recipe');
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipesData(data);
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
    }
    setRefreshing(false); // Define o estado de recarregamento como falso após obter os dados
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          style={styles.headerItem}
          icon="exit-to-app"
          size={28}
          color="#463529"
          onPress={onLogout}
        />
        <IconButton
          style={styles.headerItem}
          icon="account"
          size={28}
          color="#463529"
        />
        <IconButton
          style={styles.headerItem}
          icon="refresh"
          size={28}
          color="#463529"
          onPress={() => handleRefresh()}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Receitas Populares</Text>
          {loading ? ( // Verifica se está carregando os dados
            <Text style={styles.placeholderText}>Carregando...</Text>
          ) : recipesData.length === 0 ? ( // Verifica se não há itens na lista
            <Text style={styles.placeholderText}>Nenhuma receita encontrada.</Text>
          ) : ( // Renderiza a lista de receitas se houver itens
            <FlatList
              data={recipesData}
              renderItem={renderRecipeItem}
              keyExtractor={(itemRecipe) => itemRecipe.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimos Posts</Text>
          {/* Verifica se há posts, se não houver, exibe uma mensagem */}
          {loading ? (
            <Text style={styles.placeholderText}>Carregando...</Text>
          ) : postData.length === 0 ? (
            <Text style={styles.placeholderText}>Nenhum post disponível.</Text>
          ) : (
            /* Renderiza os posts */
            <FlatList
              data={postData}
              renderItem={renderpostItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </ScrollView>
      <Footer />
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
  headerItem: {
    marginHorizontal: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
    color: '#463529',
  },
  recipeContainer: {
    marginRight: 20,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#463529',
  },
  recipeBodyText: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 5,
  },
  recipeCalories: {
    fontSize: 14,
    color: '#808080',
  },
  placeholderText: {
    fontSize: 
    16,
    color: '#808080',
    paddingHorizontal: 20,
  },
});

export default Home;
