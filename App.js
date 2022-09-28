import React, {Component} from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/Pages/Home/';
import Login from './src/Pages/Login/index';
import Cadastro from './src/Pages/Cadastro/index'
import Senha from './src/Pages/Senha/index'

const Stack = createNativeStackNavigator()

export default class App extends Component{
  render(){
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Senha" component={Senha}/>


      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}