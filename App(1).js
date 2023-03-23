import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
            onPress={() => Alert.alert('Padre de la computación.')} />
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
            onPress={() => Alert.alert('El padre de la nación.')} />
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
            onPress={() => Alert.alert('Primer presidente afroamericano de Sudáfrica. ')} />
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Madre Teresa"  
            color = "green"
            onPress={() => Alert.alert('Santa Teresa de Calcuta.')} />
        </View>
      </View>
    )
  }
}