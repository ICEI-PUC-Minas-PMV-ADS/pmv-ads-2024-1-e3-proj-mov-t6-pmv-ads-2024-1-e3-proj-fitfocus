import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useAuth } from '../auth/AuthContext';
import * as SecureStore from 'expo-secure-store';

const ProfilePage = () => {
  const { onLogout } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await SecureStore.getItemAsync('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.logout} onPress={onLogout}>Sair</Text>
      </View>
      {user && (
        <View style={styles.profileInfo}>
          <Image source={require('../assets/profile-pic.jpg')} style={styles.profileImage} />
          <Text style={styles.username}>{user.username}</Text>
          {user.isContentCreator ? (
            <View style={styles.contentCreatorInfo}>
              <Text style={styles.role}>Content Creator</Text>
              <Text style={styles.workTitle}>Título de Trabalho: {user.workTitle}</Text>
              <Text style={styles.email}>Email: {user.email}</Text>
            </View>
          ) : (
            <View style={styles.userInfo}>
              <Text style={styles.role}>Usuário comum</Text>
              <Text style={styles.attribute}>Nome: {user.name}</Text>
              <Text style={styles.attribute}>CPF: {user.cpf}</Text>
              <Text style={styles.email}>Email: {user.email}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logout: {
    color: 'red',
    fontSize: 18,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  role: {
    fontSize: 18,
    marginBottom: 10,
  },
  contentCreatorInfo: {
    marginBottom: 20,
  },
  workTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  userInfo: {
    marginBottom: 20,
  },
  attribute: {
    fontSize: 16,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
  },
});

export default ProfilePage;
