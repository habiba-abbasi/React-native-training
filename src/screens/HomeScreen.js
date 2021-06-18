import React,{Component} from 'react';
import {View, Button, StyleSheet, TextInput, Text} from 'react-native';
import {createStore} from 'redux';
import {provider} from 'react-redux';
import {connect} from 'react-redux';
class HomeScreen extends Component {
  // const store = createStore();
    constructor(props) {
      super(props);
      console.log("TH",this.props);
    //   this.state = {count: 0};
    }
  
    render() {
      return (
        <View style={styles.containerView}>
          <Text style={{fontWeight:'bold',  textAlign : 'center', fontSize: 25}}>Assignment 3</Text>

          <Text style={{ fontSize: 20, paddingTop: 20}}>Count:{this.props.count}</Text>
        
          <View style={styles.button}>
          <Button 
          style = {styles.button}
            title="Updating count"
            onPress={() => this.props.navigation.navigate('Counter')}
          />
          </View>
        </View>
      );
    }
  
  };
  mapStateToProps =state => {
    // return {
      console.log("Starte",state);
     const {count} = state.countReducer;
     return {count};
    // };
  };
  export default connect(mapStateToProps) (HomeScreen); 
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