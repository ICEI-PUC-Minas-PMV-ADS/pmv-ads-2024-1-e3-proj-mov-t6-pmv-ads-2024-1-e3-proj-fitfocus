import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './footer';

const AlturaStatusBar = 0; // Ajustado para iniciar a partir do topo
const AlturaTela = Dimensions.get('window').height;

export default function Imc({navigation}) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState(0); // Ajustado para armazenar como valor numérico
  const [unidadePeso, setUnidadePeso] = useState('kg');
  const [unidadeAltura, setUnidadeAltura] = useState('cm');
  const [imc, setImc] = useState(null);
  const [resultadoVisivel, setResultadoVisivel] = useState(false);

  const unidadesPeso = ['kg', 'lb'];
  const unidadesAltura = ['cm', 'in'];

  const calcularIMC = () => {
    // Verificar se os campos de peso e altura não estão vazios
    if (!peso || !altura) {
      // Se algum dos campos estiver vazio, exibir uma mensagem de erro ou fazer outra ação adequada
      console.log('Por favor, preencha todos os campos de peso e altura.');
      return;
    }
  
    // Converter o peso para quilogramas
    let pesoKg = unidadePeso === 'lb' ? peso / 2.205 : peso;
  
    // Converter a altura para metros
    let alturaMetros = unidadeAltura === 'in' ? altura / 39.37 : altura / 100; // Convertendo centímetros para metros
  
    // Calcular o IMC
    const imcCalculado = pesoKg / (alturaMetros * alturaMetros);
  
    // Atualizar o estado do IMC e exibir o resultado
    setImc(imcCalculado.toFixed(2)); // Arredondando para 2 casas decimais
    setResultadoVisivel(true); // Mostrar o resultado
  };
  
  const fecharResultado = () => {
    setResultadoVisivel(false); // Fechar o resultado
  };
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Ionicons
          name="body"
          size={28}
          color="white"
          style={styles.bodyIcon}
        />
        <View style={styles.content}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Idade</Text>
            <Text style={styles.label}>Altura</Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Idade"
              style={styles.input}
              value={idade}
              onChangeText={(text) => setIdade(text.replace(/[^0-9]/g, ''))}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Altura"
              style={styles.input}
              value={altura}
              onChangeText={(text) => setAltura(text.replace(/[^0-9.]/g, ''))}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.picker}
              onPress={() =>
                setUnidadeAltura(unidadeAltura === 'cm' ? 'in' : 'cm')
              }>
              <Text>{unidadeAltura}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Gênero</Text>
            <Text style={styles.label}>Peso</Text>
          </View>
          <View style={styles.inputRow}>
            <TouchableOpacity
              onPress={() => setGenero(0)}
              style={[
                styles.genderButton,
                genero === 0 && styles.genderSelected,
              ]}>
              <Ionicons name="woman-outline" size={44} color="black" />
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => setGenero(1)}
              style={[
                styles.genderButton,
                genero === 1 && styles.genderSelected,
              ]}>
              <Ionicons name="man-outline" size={44} color="black" />
            </TouchableOpacity>
            <TextInput
              placeholder="Peso"
              style={styles.input}
              value={peso}
              onChangeText={(text) => setPeso(text.replace(/[^0-9.]/g, ''))}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.picker}
              onPress={() =>
                setUnidadePeso(unidadePeso === 'kg' ? 'lb' : 'kg')
              }>
              <Text>{unidadePeso}</Text>
            </TouchableOpacity>
            </View>
          <TouchableOpacity onPress={calcularIMC} style={styles.calcularButton}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
          {resultadoVisivel && (
            <TouchableOpacity onPress={fecharResultado} style={styles.fecharButton}>
              <Text style={styles.fecharButtonText}>X</Text>
            </TouchableOpacity>
          )}
          {imc !== null && resultadoVisivel && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
              <View style={styles.line} />
              <Text style={styles.interpretationText}>Interpretação do IMC</Text>
              <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>MENOR QUE 18,5</Text>
                  <Text style={styles.tableCell}>MAGREZA</Text>
                  <Text style={styles.tableCell}>0</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>ENTRE 18,5 E 24,9</Text>
                  <Text style={styles.tableCell}>NORMAL</Text>
                  <Text style={styles.tableCell}>0</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>ENTRE 25,0 E 29,9</Text>
                  <Text style={styles.tableCell}>SOBREPESO</Text>
                  <Text style={styles.tableCell}>I</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>ENTRE 30,0 E 39,9</Text>
                  <Text style={styles.tableCell}>OBESIDADE</Text>
                  <Text style
={styles.tableCell}>II</Text>
</View>
<View style={styles.tableRow}>
  <Text style={styles.tableCell}>MAIOR QUE 40,0</Text>
  <Text style={styles.tableCell}>OBESIDADE GRAVE</Text>
  <Text style={styles.tableCell}>III</Text>
</View>
</View>
</View>
)}
</View>
</ScrollView>
<Footer navigation={navigation} />
</KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F9E9D1',
paddingTop: AlturaStatusBar, // Removi o valor + 20 para iniciar do topo
},
bodyIcon: {
alignSelf: 'center',
fontSize: 172,
color: '#DAAC7C',
marginTop: 20, // Ajustado para iniciar um pouco abaixo do topo
},
content: {
justifyContent: 'center',
alignItems: 'center',
marginTop: 20, // Ajustado para iniciar um pouco abaixo do topo
},
scrollContent: {
flexGrow: 1,
paddingBottom: 60,
},
inputRow: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
marginBottom: 15,
},
label: {
marginRight: 20,
fontSize: 24,
color: '#4E3D32',
},
input: {
borderWidth: 0,
borderBottomWidth: 1,
borderBottomColor: '#463529',
paddingVertical: 10,
paddingHorizontal: 20,
width: 115,
marginRight: 30,
},
picker: {
borderWidth: 0,
borderBottomWidth: 0,
borderBottomColor: '#463529',
paddingVertical: 10,
paddingHorizontal: 0,
},
genderButton: {
padding: 10,
marginRight: 10,
},
genderSelected: {
backgroundColor: '#DAAC7C',
borderRadius: 15,
},
divider: {
width: 4,
height: 45,
backgroundColor: '#463529',
marginRight: 10,
},
calcularButton: {
backgroundColor: '#DAAC7C',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 8,
marginTop: 10,
},
buttonText: {
color: 'white',
},
resultContainer: {
alignItems: 'center',
},
resultText: {
marginTop: 20,
fontSize: 18,
},
line: {
borderBottomWidth: 1,
borderBottomColor: '#463529',
width: '80%',
marginTop: 20,
marginBottom: 10,
},
interpretationText: {
fontSize: 20,
marginTop: 20,
},
tableContainer: {
marginTop: 10,
backgroundColor: '#DAAC7C',
padding: 25,
borderRadius: 8,
},
tableRow: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 5,
},
tableCell: {
marginRight: 10,
color : 'white',
},
footer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
backgroundColor: '#211A15',
padding: 16,
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
},
footerItem: {
alignItems: 'center',
},
footerText: {
color: 'white',
},
footerIconContainer: {
alignItems: 'center',
},
fecharButton: {
position: 'absolute',
top: 380,
left: 30,
},
fecharButtonText: {
fontSize: 20,
color: '#463529',
},
});
