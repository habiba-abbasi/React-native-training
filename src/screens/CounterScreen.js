/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, FlatList,StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }
 
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
     .then(res => {
       console.log("Res",res);
      // const persons =;
      setItems(res.data);
    })
      .catch((error) => {
          console.log("Get Error result",error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    // <View>
      
    //   <Text style={{ fontSize: 20, paddingTop: 20, paddingBottom: 20}}>Current Count: {state.count}</Text>
    // <View>
    //   <Button
    //     title="Increase"
    //     onPress={() => {
    //       dispatch({ type: 'increment', payload: 1 });
    //     }}
    //   />
    //   </View>
    //   <View style= {styles.button}>
    //   <Button
    //     title="Decrease"
    //     onPress={() => {
    //       dispatch({ type: 'decrement', payload: 1 });
    //     }}
    //   />
    //   </View>
    // </View>
    <View style={styles.container}>
        <FlatList
        vertical
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor = {item => item.id}
        renderItem={ ({item}) =>{
        return( <Item title={item.name} />);
        }
         } />
    </View>
  );
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
  },button:{
    marginBottom: 10,
    marginTop: 10,
},title: {
  fontSize: 20,
  color: 'black'
}, item: {
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
});

export default CounterScreen;
