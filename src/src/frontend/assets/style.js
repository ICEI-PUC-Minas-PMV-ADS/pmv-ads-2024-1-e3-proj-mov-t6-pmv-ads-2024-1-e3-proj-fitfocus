import styled from 'styled-components/native';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const AlturaStatusBar = Constants.statusbarHeight;



export default Colors = {
    primaria: "#F9E9D1",
    secundaria: "#491615",

};

const {primaria, secundaria} = Colors;

export const ContainerPrincipal = styled.View`
    flex: 1;
    background-color: ${primaria};
    padding-top: ${AlturaStatusBar + 20}px;
    padding: 15px;
  
`;

export const ContainerInterno = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

`;

export const LogoLogin = styled.Image`
    height: 200px;
`;


export const FormContainer = styled.View`
    width: 90%;
`;

export const InputStyle = styled.TextInput`

    font-size: 20px;
    height: 60px;
    margin-vertical: 3px;
    borderBottomWidth: 3px;
    borderColor: ${secundaria};
    color: ${secundaria};
    text-align: center;
    fontWeight: bold;
`;

export const TextLabel = styled.Text`
    font-size: 15px;
    fontWeight: bold;

`;

export const IconesLogin =  styled.View`
    left: 20px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const ButtonStyle = styled.TouchableOpacity`
    margin: 75px 40px 50px 40px;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-vertical: 5px;
    height: 75px;
    borderWidth: 8px;
    borderColor: ${secundaria};
    backgroundColor: ${primaria}
`;

export const TextButton = styled.Text`
    color: ${secundaria};
    font-size: 35px;
    fontWeight: bold;
`;


export const RegisterContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;    
    padding-top: 45px;
    backgroundColor: "#fff";
`;

export const TextRegister = styled.Text`
    font-size:30px;
    color:${secundaria};
    fontWeight: bold;

`;

export const ButtonError = styled.Text`
    text-align: center;
    font-size: 10px;

`;

