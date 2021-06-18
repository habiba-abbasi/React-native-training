import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
 class CounterScreen extends React.Component {
  render() {
    return (
      <View  style = {styles.containerView}>
        <Text  >Counter: {this.props.count}</Text>
        <View style = {styles.button}>
          <Button   title="Decrement" onPress={()=>this.props.dispatch({ type: 'DECREMENT' })}>-</Button>
         
          </View>
          <View style = {styles.button}>
          <Button   title="Increment"onPress={()=>this.props.dispatch({ type: 'INCREMENT' })}>+</Button>
          </View>
        <View style={styles.backButton}>
      
      <Button
       style = {styles.button}
        title="Back to home"
        onPress={() =>
          this.props.navigation.navigate('Home')
        }
      />
      </View>
      </View>
    );
  }
}
const mapStateToProps =state => {
  const {count} = state.countReducer;
  return {count};
};
export default connect(mapStateToProps)(CounterScreen);
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
      marginTop: 10,
  },
  backButton:{
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