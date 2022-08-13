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
        
        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiencia Profissional</Text>

            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Desenvolvedor KOTLIN</Text>
              <Text style={style.card_content_text}>Desenvolvedor Frontend</Text>
              <Text style={style.card_content_text}>Desenvolvedor React Native</Text>

            </View>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Formação Academica</Text>

            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Gestão em TI</Text>
              <Text style={style.card_content_text}>Engenharia de Software</Text>
              <Text style={style.card_content_text}>Desenvolvedor React Native</Text>

            </View>
          </View>
        </View>

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
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20    

  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF'  

  },
  card_content: {
    marginTop: 20,
    color: '#939393'
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10

  }

});

export default App;
