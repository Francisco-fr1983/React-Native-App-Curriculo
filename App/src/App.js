/* eslint-disable no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import foto from './assets/foto.jpg';
import Icon from 'react-native-vector-icons/Feather'
import Card from './components/Card';

const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://linkedin.com/in/finalfantasy')
        break

      case 'github':
        Alert.alert('Meu GitHub','https://github.com/finalfantasy')
        break  
      case 'facebook':
        Alert.alert('Facebook','https://facebook.com/finalfantasy')
        break  
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Francisco Francielo</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
              <Icon name = "github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('facebook')}>
              <Icon name = "facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
              <Icon name = "linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>      

        <Card titulo='Experiência Profissional'/>  
        <Card titulo='Formação Academica'/>
        <Card />
        <Card />   

      </View>
    </>
  );
};

//Estilização, ou seja, aplicação dos estilos e formatação dos icones.
const Style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    
  },
  container_cabecalho: {
    alignItens: 'center',
    justifyContent: 'center',
    marginTop: 70

  },
  foto: {
    width: 250,
    height: 250, 
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  } 

})

export default App;
