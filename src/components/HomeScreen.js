import React,{Component} from 'react';
import { useState } from 'react';
import {View, Button, StyleSheet, TextInput, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState('Habiba');
  const [value, setValue] = useState('');
  
      const UpdateText=()=>{
        setData(value);
      }
      return (
        <View style={styles.containerView}>
          <Text style={{fontWeight:'bold',  textAlign : 'center', fontSize: 25}}>Assignment 2</Text>

          <Text style={{ fontSize: 20, paddingTop: 20}}>Hello! this is  {data}</Text>
          <TextInput placeholder="Enter Text"
                    style={styles.input}
                    onChangeText={text=> setValue(text)}
                    multiline={true}/>
          <View style={styles.button}>
          <Button 
            title="Press me"
            onPress={ UpdateText}
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