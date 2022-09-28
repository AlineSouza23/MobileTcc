import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";


export default class Home extends Component{
  
    constructor(props){
        super(props)
        this.irLogin = this.irLogin.bind(this)
       
        this.irCadastro = this.irCadastro.bind(this)

        this.irSenha = this.irSenha.bind(this)
    }
    irLogin(){
        this.props.navigation.navigate("Login")
    }
    irCadastro(){
      this.props.navigation.navigate("Cadastro")
    }
    irSenha(){
      this.props.navigation.navigate("Senha")
    }
  
  
    render(){
        return(
            <View>

            <StatusBar hidden/>
      <ImageBackground source={require('../../../assets/cantina.png')}  style={{width: 370,height: 430, marginTop: -89, left:150}}/>
      <ImageBackground source={require('../../../assets/Sorriso.png')}  style={{width: 80,height: 80, marginTop: -299, marginLeft: 20}}/>

      <TouchableOpacity onPress={this.irLogin}>
        <Text style={styles.botao}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.irCadastro}>
        <Text style={styles.botao2}>Cadastrar</Text>
      </TouchableOpacity>

   
     
      <ImageBackground source={require('../../../assets/cantina2.png')}  style={{width: 370,height: 400, marginTop: 405, left:-70}} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      
    },
    TouchableOpacity:{
      top: 161
    
    },
    Text:{
      color: "#000",
  
    
    },
    botao:{
      width:130,
      height: 50,
      color:"#000", 
      display:'flex',
      fontSize:25,
      borderStartWidth: 3,
      borderWidth: 2,
      padding: 5,
      borderRadius:50,
      position:'absolute',
      textAlign: 'center',
      alignSelf:'center',
      top:-550,
      marginTop: 905
    },
    botao2:{
      width:130,
      height: 50,
      color:"#000", 
      display:'flex',
      fontSize:25,
      borderStartWidth: 3,
      borderWidth: 2,
      padding: 5,
      borderRadius:50,
      position:'absolute',
      textAlign: 'center',
      alignSelf:'center',
      top:-650,
      marginTop: 905
    }
    
  });