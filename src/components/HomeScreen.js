import React,{Component} from 'react';
import { useState } from 'react';
import {View, Button, StyleSheet, TextInput, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  
     
      return (
        <View style={styles.containerView}>
          <Text style={{fontWeight:'bold',  textAlign : 'center', fontSize: 25}}>Assignment 3</Text>

          <Text style={{ fontSize: 20, paddingTop: 20}}>Hello! Need to check count?</Text>
        
          <View style={styles.button}>
          <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
          </View>
        </View>
      );
    // };
  
  };
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: 'column',
      justifyContent : 'center'
    },
    button:{
        marginBottom: 10,
        marginTop: 10
    },
    containerView: {
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection : 'column',
      flex:1,
    }, input: {
      width:200,
      paddingTop: 10,
      borderBottomColor:'red',
      borderBottomWidth:1,
  }, 
  });
  export default HomeScreen;