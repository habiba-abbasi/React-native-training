import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

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
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      
      <Text style={{ fontSize: 20, paddingTop: 20, paddingBottom: 20}}>Current Count: {state.count}</Text>
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      </View>
      <View style= {styles.button}>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    marginBottom: 10,
    marginTop: 10,
},
});

export default CounterScreen;
