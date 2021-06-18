import {StyleSheet, Text,View} from 'react-native';
import React from 'react';
export default function Header(props){
    return(
        <View style = {styles.header}>
            <Text style = {styles.title}>{props.head}</Text>
        </View>
    );
}
const styles= StyleSheet.create({
header:{
    height:80,
    paddingTop:38,
    backgroundColor: 'red'
},
title:{
  textAlign : 'center',
  color: '#fff',
  fontSize:20,
  fontWeight: 'bold'
}
})