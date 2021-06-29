/* eslint-disable prettier/prettier */
import React,{Component, useEffect} from 'react';
import { useState } from 'react';
import {View, Button, StyleSheet, FlatList, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://reqres.in/api/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

     
      // return (
      //   <View style={styles.containerView}>
      //     <Text style={{fontWeight:'bold',  textAlign : 'center', fontSize: 25}}>Assignment 3</Text>

      //     <Text style={{ fontSize: 20, paddingTop: 20}}>Hello! Need to check count?</Text>
        
      //     <View style={styles.button}>
      //     <Button
      //   title="Go to Counter Demo"
      //   onPress={() => navigation.navigate('Counter')}
      // />
      //     </View>
      //   </View>
      // );
      if (error) {
        return (<Text>Error: {error.message}</Text>);
      } else if (!isLoaded) {
        return (<Text>Loading...</Text>);
      } else {
        return (
          // <ul>
          //   {items.map(item => (
          //     <li key={item.id}>
          //       {item.name} {item.price}
          //     </li>
          //   ))}
          // </ul>
          <View>
          <FlatList
          vertical
          showsHorizontalScrollIndicator={false}
          data={items}
          keyExtractor={item => item.id}
          renderItem={ ({item}) =>{
            return( <Item title={item.name} />);
           }}
        />
        <Button  title="Go For Axios demo" style={styles.actionButtonIcon} onPress={() => navigation.navigate('Counter')}/>
        </View>   
          );
      }
  
  
  };
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
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
  }, title: {
    fontSize: 20,
    color: 'black'
  }, item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }, actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
  });
  export default HomeScreen;