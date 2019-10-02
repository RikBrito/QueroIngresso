import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


import { StyleSheet, Text,View, TextInput } from 'react-native';
import {
  styles,
  Tabsp,
  TabsContainer, 
  TabItem,
  TabText
} from './styles';
export default function App() {
  return (
    <View style={styles.container}>


      <Text style={styles.setTextStyle}>Tipos de evento</Text>
      <Text style={styles.setTextStyle}>Proximdade</Text> 
      <Text style={styles.setTextStyle}>Pesquias recentes</Text>

      <TabsContainer>
        <Tabsp>        
        <TabItem >
          <Icon   name="person" size={24} color="#FFF" />
          <TabText>Perfil</TabText>
        </TabItem>

        <TabItem>
          <Icon name="search" size={24} color="#FFF" />
          <TabText>Explorar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="favorite" size={24} color="#FFF" />
          <TabText>Favoritos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="home" size={24} color="#FFF" />
          <TabText>Home</TabText>
        </TabItem>
        </Tabsp>


      </TabsContainer>
      

      

    </View>
  );
}

