import { createContext, useContext, useEffect, useState } from "react";
import axios, { formToJSON } from 'axios';
import * as SecureStore from 'expo-secure-store';
import React from 'react'

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null; objeto: string | null };
    onRegisterUser?: (email: string, password: string, cpf: string, name: string) => Promise<any>;
    onRegisterCreator?: (email: string, password: string, jobTitle: string, name: string) => Promise<any>;
    onLoginUser?: (email: string, password: string) => Promise<any>;
    onLoginCreator?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
    checkAuthValidity?: () => Promise<any>;
}

const TOKEN_KEY = 'my-jwt';
const USER_OBJECT_KEY = 'user-object';
export const API_URL = 'https://api-fit-edsyjosaoq-uc.a.run.app';

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
        objeto: string | null;
    }>({
        token: null,
        authenticated: null,
        objeto: null
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            const obj = await SecureStore.getItemAsync(USER_OBJECT_KEY);

            console.log(token);
            console.log(obj)

            const userJson = JSON.parse(obj)

            if (token && userJson.username) {
                console.log("token found");
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setAuthState({
                    token: token,
                    authenticated: true,
                    objeto: obj
                });

                console.log(authState);
            }
        }

        loadToken();
    }, []);

    const registerUser = async (email: string, password: string, cpf: string, name: string) => {
        try {
            console.log("register user");
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('CPF:', cpf);
            const response = await axios.post(`${API_URL}/api/v1/user`, { email, password, name, cpf });
            console.log(response);
            return response.data; 
        } catch (e) {
            const errorMessage = (e.response && e.response.data && e.response.data.msg) ? e.response.data.msg : 'An error occurred';
            return { error: true, msg: errorMessage };
        }
    };

    const registerCreator = async (email: string, password: string, jobTitle: string, name: string) => {
        try {
            return await axios.post(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/contentCreator`, { email, password, jobTitle, name });
        } catch (e) {
            const errorMessage = (e.response && e.response.data && e.response.data.msg) ? e.response.data.msg : 'An error occurred';
            return { error: true, msg: errorMessage };
        }
    };


    const loginUser = async (email:string, password: string) => {
    try {
        const body = `{"email": "${email}", "password": "${password}"}`;

        const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });

        if (!response.ok) {
            throw new Error('Failed to log in');
        }

        const result = await response.json();

        console.log("token: " + result.token);
        console.log("user: " + JSON.stringify(result.user));
        console.log("additionalAttribute: " + result.object);


        setAuthState({
            token: result.token,
            authenticated: true,
            objeto: result.object
        });

        // Define o cabeçalho de autorização para solicitações futuras
        axios.defaults.headers.common['Authorization'] = `Bearer ${result.token}`;

        // Armazena o token no SecureStore
        await SecureStore.setItemAsync(TOKEN_KEY, result.token);
        await SecureStore.setItemAsync(USER_OBJECT_KEY, JSON.stringify(result.object));
        
        return result;

    } catch (e) {
        return { error: true, msg: e.message };
    }
};


const loginCreator = async (email:string, password: string) => {
    try {
        const body = `{"email": "${email}", "password": "${password}"}`;

        const response = await fetch(`https://api-fit-edsyjosaoq-uc.a.run.app/api/v1/contentCreator/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });

        if (!response.ok) {
            throw new Error('Failed to log in');
        }

        const result = await response.json();

        console.log("token: " + result.token);
        console.log("user: " + JSON.stringify(result.user));
        console.log("additionalAttribute: " + result.object);

        setAuthState({
            token: result.token,
            authenticated: true,
            objeto: result.object
        });

        // Define o cabeçalho de autorização para solicitações futuras
        axios.defaults.headers.common['Authorization'] = `Bearer ${result.token}`;
        
        console.log(JSON.stringify(result.object) + "alllllllllll")

        // Armazena o token no SecureStore
        await SecureStore.setItemAsync(TOKEN_KEY, result.token);
        await SecureStore.setItemAsync(USER_OBJECT_KEY, JSON.stringify(result.object));        

        return result;

    } catch (e) {
        return { error: true, msg: e.message };
    }
};

    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY);

        axios.defaults.headers.common['Authorization'] = '';

        setAuthState({
            token: null,
            authenticated: null,
            objeto: null
        });
    }

    const value = {
        onRegisterUser: registerUser,
        onRegisterCreator: registerCreator,
        onLoginUser: loginUser,
        onLoginCreator: loginCreator,
        onLogout: logout,
        authState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
