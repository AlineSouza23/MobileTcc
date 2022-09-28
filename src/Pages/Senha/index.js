import React, {useState} from "react";
import { Component } from "react";
import { View, Text, TextInput, StyleSheet,ImageBackground, TouchableOpacity, Alert } from "react-native";

export default class Senha extends Component{
  
  constructor(props){
    super(props)

    this.irSenha = this.irSenha.bind(this)
}

irSenha(){
  this.props.navigation.navigate("Senha")
}
render(){

        return(
  

            <View >

             <ImageBackground source={require('../../../assets/Login.png')}  style={{width: 450,height: 880, marginTop: -19}}/>

      <TextInput placeholder='Seu CPF ou NIF' style={styles.textInput}/>
      <TextInput placeholder='Sua senha...' style={styles.textInput} />
      <TouchableOpacity onPress={this.irSenha}>
        <Text style={styles.botao2}>MUDARRRRRRRRRRR</Text>
      </TouchableOpacity>
      <ImageBackground source={require('../../../assets/Sorriso.png')}  style={{width: 80,height: 80, marginTop: -450, marginLeft: 10}}/>
      
  
             <ImageBackground source={require('../../../assets/Sorriso.png')}  style={{width: 80,height: 80, marginTop: -450, marginLeft: 10}}/>


          

            </View>
        );
}
    }



 
const styles = StyleSheet.create({
  container: {
  },
  textInput:{
    width:'80%',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    marginBottom:200,
    marginTop: -345,
    paddingLeft:20,
    shadowColor: '#171717',
    shadowOffset: {width: -9, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderStartWidth: 3,
    borderWidth: 2,
    marginLeft: 25,
   
  },
  Text:{
    color: "#000",
    marginLeft: 30,
  },
  botao:{
    width:90,
    color:"#000", 
    display:'flex',
    fontSize:25,
    position:'absolute',
    top:380,
    borderStartWidth: 3,
    borderWidth: 2,
    padding: 5,
    borderRadius:50,
    alignSelf:'center',
  },
  botao2:{
    width:400,
    color:"#000", 
    display:'flex',
    fontSize:15,
    position:'absolute',
    top:-105,
    padding: 5,
    marginLeft: 50,
    borderRadius:50,
    alignSelf:'center',
  },
  errorMessage:{
    fontSize: 12,
    color:"red",
    fontWeight:"bold",
    paddingLeft:20

}
  
  
});



