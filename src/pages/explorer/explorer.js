import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


import {TouchableHighlight, TouchableOpacity, StyleSheet, Text,View, Button,} from 'react-native';
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
      
  <TouchableOpacity style={styles.submit} onPress={this._onPressButton}> 


  <Text style={styles.submitText}>Musica</Text>

</TouchableOpacity >
    
   
      <Text style={styles.setTextStyle}>Tipos de evento</Text>
      <Text style={styles.setTextStyle}>Proximidade</Text> 
      <Text style={styles.setTextStyle}>Pesquias recentes</Text>
      <TabsContainer>
        <Tabsp>       
        <TouchableOpacity>
      
        <TabItem >
          <Icon   name="person" size={24} color="#FFF" />
          <TabText>Perfil</TabText>
        </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
        <TabItem>
          <Icon name="search" size={24} color="#FFF" />
          <TabText>Explorar</TabText>
        </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabItem>
          <Icon name="favorite" size={24} color="#FFF" />
          <TabText>Favoritos</TabText>
        </TabItem>
        </TouchableOpacity>
        <TouchableOpacity>
        <TabItem>
          <Icon name="home" size={24} color="#FFF" />
          <TabText>Home</TabText>
        </TabItem> 
        </TouchableOpacity>
        </Tabsp>


      </TabsContainer>
      
      

      

    </View>
  );
}
