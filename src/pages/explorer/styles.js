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
  background: rgba(55, 65, 64,0.2);
  border-radius: 25px;
  margin-left: 7px;
  padding: 10px;
  justify-content: space-between;
  `;

  export const TabText = styled.Text`
  font-size:13px;
   color:#FFF;
  `;




  
  
export const Tabsp = styled.ScrollView.attrs({
    
    horizontal: true,
    contentContainerStyle: {
        width: 371,
        height: 100,
        backgroundColor: "#BDC3C7",
        
       
    
         padding: 10},
    showsHorizontalScrollIndicator: false,
  })``;