import React from 'react'
import {View, Text,} from 'react-native'

import style from './style'

const Card = (props) => {
    return(
        <>
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
              <Text>{props.titulo}</Text>

            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Gestão em TI</Text>
              <Text style={style.card_content_text}>Engenharia de Software</Text>
              <Text style={style.card_content_text}>Desenvolvedor React Native</Text>

            </View>
          </View>
        </View>
        </>
    )
}

export default Card