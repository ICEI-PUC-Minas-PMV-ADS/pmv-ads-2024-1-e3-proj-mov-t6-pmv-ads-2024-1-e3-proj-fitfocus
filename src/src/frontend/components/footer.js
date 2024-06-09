import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../auth/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const Footer = () => {
    const navigation = useNavigation();
    const { authState } = useAuth();
    const { objeto } = authState;
    const { onLogout } = useAuth();

    const [isContentCreator, setIsContentCreator] = useState(true);

    useEffect(() => {
        const checkUserType = async () => {
            try {
                // Verifica se o objeto está definido e se possui o atributo cpf
                console.log(objeto.cpf + "lililili");

                if (objeto.cpf) {
                    setIsContentCreator(false);
                }
            } catch (error) {
                console.error('Erro ao verificar o tipo de usuário:', error.message);
            }
        };
        console.log(isContentCreator + "lililili");

        checkUserType();
    }, [objeto]);

    return (
        <View style={styles.footer}>
            <View style={styles.footerItem}>
                <IconButton
                    icon="home"
                    size={28}
                    color="white"
                    onPress={() => navigation.navigate('Home')}
                />
                <Text style={styles.footerText}>Home</Text>
            </View>
            {isContentCreator ? (
                <>
                    <View style={styles.footerItem}>
                        <IconButton
                            icon="book"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('CreateRecipe')}
                        />
                        <Text style={styles.footerText}>Cria Receita</Text>
                    </View>
                    <View style={styles.footerItem}>
                        <IconButton
                            icon="file"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('CreatePost')}
                        />
                        <Text style={styles.footerText}>Cria Post</Text>
                    </View>
                </>
            ) : (
                <>
                    <View style={styles.footerItem}>
                        <IconButton
                            icon="food-variant"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('ListRecipe')}
                        />
                        <Text style={styles.footerText}>Receitas</Text>
                    </View>
                    <View style={styles.footerItem}>
                        <IconButton
                            icon="post-outline"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('ListPost')}
                        />
                        <Text style={styles.footerText}>Post</Text>
                    </View>
                    <View style={styles.footerItem}>
                        <IconButton
                            icon="calculator-variant"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('Imc')}
                        />
                        <Text style={styles.footerText}>IMC</Text>
                    </View>
                    <View style={styles.footerItem}>
                        <IconButton
                            icon="arm-flex"
                            size={28}
                            color="white"
                            onPress={() => navigation.navigate('Exercicios')}
                        />
                        <Text style={styles.footerText}>Exercícios</Text>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#211A15',
        padding: 10,
    },
    footerItem: {
        alignItems: 'center',
        marginRight: 10
    },
    footerText: {
        color: '#F9E9D1',
        marginTop: 0,
        fontWeight: 'bold'
    },
});

export default Footer;
