import { AuthProvider, useAuth } from "./auth/AuthContext";
import { Login } from "./components/Login"
import  Home  from "./components/Home"
import Imc from "./components/Imc"
import Exercicios from "./components/Exercicios"
import Cadastro from "./components/Cadastro"
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import CreateRecipe from "./components/CreateRecipe";
import ListRecipe from "./components/ListRecipe"
import ListPost from "./components/ListPost";
import PostDetails from "./components/PostDetails";
import DetailReceita from "./components/DetailReceita"
import CreatePost from "./components/CreatePost";
import DetailPost from "./components/DetailPost"
const Stack = createNativeStackNavigator();

export default function App() {
    return (
      
        <AuthProvider>
                <Layout></Layout>
        </AuthProvider>
    );
}

export const Layout = () => {
  const {authState, onLogout} = useAuth();

  console.log(authState);
  {authState?.authenticated ? console.log("true") : console.log("false")}

  return (
      <NavigationContainer>
          <Stack.Navigator>{authState?.authenticated ? (
            <>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Imc" component={Imc}/>
              <Stack.Screen name="Exercicios" component={Exercicios}/>
              <Stack.Screen name="CreateRecipe" component={CreateRecipe}/>
              <Stack.Screen name="ListRecipe" component={ListRecipe}/>
              <Stack.Screen name="ListPost" component={ListPost}/>
              <Stack.Screen name="PostDetails" component={ListPost}/>
              <Stack.Screen name="DetailReceita" component={DetailReceita}/>
              <Stack.Screen name="CreatePost" component={CreatePost}/>
              <Stack.Screen name="DetailPost" component={DetailPost}/>
            </>
            ):(
            <>
               <Stack.Screen name="Login" component={Login}></Stack.Screen>
               <Stack.Screen name="Cadastro" component={Cadastro}></Stack.Screen>
             </>
              )}
          </Stack.Navigator>
      </NavigationContainer>
  );
};