import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useAuth,  } from '../auth/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLoginUser, onLoginCreator } = useAuth();

  const navigation = useNavigation();


  const login = async () => {
    try {
      const result = await onLoginUser(email, password);
      console.log(result.data + "paulo freie");
      console.log("login:", result.data);
  
      if (result && result.error) {
        // Tentativa de login com onLoginCreator se onLoginUser falhar
        const creatorResult = await onLoginCreator(email, password);
  
        console.log("loginCreator:", creatorResult.data);
  
        if (creatorResult && creatorResult.error) {
          alert(creatorResult.msg);
        } else {
          // Se login com onLoginCreator for bem-sucedido
          console.log("Login successful with onLoginCreator");
          // Adicione aqui qualquer ação adicional após o login bem-sucedido com onLoginCreator
        }
      } else {
        console.log("Login successful with onLoginUser");
        // Adicione aqui qualquer ação adicional após o login bem-sucedido com onLoginUser
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };
  

    return (
      <SafeAreaView style={styles.container}>


    <Image style={styles.logo} source={require('../assets/Logo.png')} resizeMode="center" />


  <View style={styles.formContainer}>
    <View style={styles.input}>
      <Ionicons
      name="person-outline"
      size={26}
      color="491615"
      style={styles.icone}
      />
      <TextInput
      value={email}
      onChangeText={text => setEmail(text)}
      placeholder="Email"
      style={styles.textoInput}
      />
    </View>
    <View style={styles.input}>
    <Ionicons
      name="person-outline"
      size={26}
      color="491615"
      style={styles.icone}
      />
    <TextInput
      value={password}
      onChangeText={text => setPassword(text)}
      placeholder="Senha"
      secureTextEntry={true}
      style={styles.textoInput}
    />
    </View>
  </View>
  <View style={styles.botao}>
    <Button color="#491615" onPress={login}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' } }>Entrar</Text>
    </Button>

  </View>
  <TouchableOpacity style={styles.registro}>

    <Text style={styles.registroTexto} onPress={() => navigation.navigate('Cadastro')}>Registre-se</Text>
  </TouchableOpacity>
</SafeAreaView>

    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9E9D1',
    alignItems : "center",
  },
  logo: {
    height: 100,
    marginTop: 75,
    marginBottom: 25,
    width: 250,
    borderWidth: 5,
    borderRadius: 1500,
    borderColor: '#491615',
  },
  formContainer: {
    gap: 15,
    width:"100%",
    paddingHorizontal : 60,
    marginBottom: 25,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    verticalAlign: 'center',
    backgroundColor: '#F9E9D1',
    borderColor: '491615',
    borderBottomWidth: 2,
    marginVertical: 25,
    paddingHorizontal : 20,
  },

  textoInput: {
    backgroundColor: '#F9E9D1',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },

  icone: {
      paddingRight: 20,
  },
  botao: {
    width: 200,
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 8,
    borderColor: '#491615',
    mode: 'elevated',
    buttonColor: '#F9E9D1',
    marginTop: 30
  },
 registro: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100
  },
  registroTexto: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#491615'
  }
});

export {Login};