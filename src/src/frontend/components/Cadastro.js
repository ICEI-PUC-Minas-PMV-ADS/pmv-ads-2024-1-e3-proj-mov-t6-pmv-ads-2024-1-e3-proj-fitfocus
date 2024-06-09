import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Modal
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useAuth  } from '../auth/AuthContext';

export default function Cadastro() {
  const [ userType, setUserType ] = useState('user'); 
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ jobTitle, setJobTitle ] = useState('');
  const [ cpf, setCpf ] = useState('');

  const {onLoginUser, onRegisterUser, onRegisterCreator, onLoginCreator } = useAuth();

  const navigation = useNavigation();
  
  const registerUser = async () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Job Title:', jobTitle);
    console.log('CPF:', cpf);
    const result = await onRegisterUser(email, password, cpf, name);
    console.log(result);
    navigation.navigate('Login')
    if (result && result.error) {
      alert(result.msg);
    }else {
      onLoginUser();
    }
  };

 
  const registerCreator = async () => {
    const result = await onRegisterCreator(email, password, jobTitle, name);
    navigation.navigate('Login')
    if (result && result.error) {
      alert(result.msg);
    }else {
      onLoginCreator();
    }
  };
  

    

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>

        <Image style={styles.logo} source={require('../assets/Logo.png')} resizeMode="center" />

        <Picker
          selectedValue={userType}
          onValueChange={(itemValue, itemIndex) => setUserType(itemValue)}
          style={{width: '100%'}}
        >
          <Picker.Item label="Usuário" value="user" />
          <Picker.Item label="Criador de Conteúdo" value="contentCreator" />
        </Picker>

        <View style={styles.formContainer}>
          <View style={styles.input}>
            <Ionicons
              name="person-outline"
              size={26}
              color="491615"
              style={styles.icone}
            />
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Nome Completo"
              style={styles.textoInput}
            />
          </View>
          <View style={styles.input}>
            <Ionicons
              name="mail"
              size={26}
              color="491615"
              style={styles.icone}
            />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="E-mail"
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
          {userType === 'user' && (
            <>
              <View style={styles.input}>
                <Ionicons
                  name="person-outline"
                  size={26}
                  color="491615"
                  style={styles.icone}
                />
                <TextInput
                  value={cpf}
                  onChangeText={text => setCpf(text)}
                  placeholder="CPF"
                  style={styles.textoInput}
                />
              </View>
            </>
          )}
          {userType === 'contentCreator' && (
            <>
              <View style={styles.input}>
                <Ionicons
                  name="person-outline"
                  size={26}
                  color="491615"
                  style={styles.icone}
                />
                <TextInput
                  value={jobTitle}
                  onChangeText={text => setJobTitle(text)}
                  placeholder="Título do Trabalho"
                  style={styles.textoInput}
                />
              </View>
            </>
          )}
        </View>
          <Button color="#491615" onPress={userType === 'user' ? registerUser : registerCreator}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Registrar</Text>
          </Button>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9E9D1',
    alignItems: "center",
  },
  logo: {
    height: 100,
    marginTop: 50,
    marginBottom: 10,
    width: 250,
    borderWidth: 5,
    borderRadius: 1500,
    borderColor: '#491615',
  },
  formContainer: {
    gap: 5,
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
    width: "100%",
    fontSize: 18,
    fontWeight: '900',
    showSoftInputOnFocus : false
  },

  icone: {
    paddingRight: 10,
  },
  botao: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#491615',
    backgroundColor: '#491615',
    marginTop: 20, // Adicione um espaço entre o formulário e o botão
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9E9D1',
    paddingVertical: 10,
  },
});
