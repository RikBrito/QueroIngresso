import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';
import {  } from 'react-native';

export const styles = StyleSheet.create({
    container: {    
        flex: (1),
        height: 100,
        marginTop: 550,

      
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    setTextStyle : {
      fontSize: 20,
      color: '#4e3880'
    },
     
    submit:{
      marginRight:40,
      marginLeft:40,
      marginTop:10,
  },
  submitText:{
      width: 150,
      height: 50,
      paddingTop:15,
      fontSize: 18,
      color:'#fff',
      textAlign:'center',
      backgroundColor:'#8A2BE2',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#fff'
  }

  });

  export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,

    contentContainerStyle: { justifyContent: 'center', paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false,
  })``;
  
  export const TabItem = styled.View`
  
  width: 80px; 
  height: 80px;
  background: rgba(250, 255, 212,0.7);
  border-radius: 25px;
  margin-left: 7px;
  padding: 10px;
  justify-content: space-between;
  `;

  export const TabText = styled.Text`
  font-size:13px;
   color:#FFF;
  `



  
  
export const Tabsp = styled.ScrollView.attrs({
    
    horizontal: true,
    contentContainerStyle: {
        width: 371,
        height: 100,
        backgroundColor: "#e6e8dc",   
       
    
         padding: 10},
    showsHorizontalScrollIndicator: false,
  })``;