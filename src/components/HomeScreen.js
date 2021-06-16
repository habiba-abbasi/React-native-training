import React,{Component} from 'react';
import {View, Button, StyleSheet, TextInput, Text} from 'react-native';

  export default class HomeScreen extends Component {
  
    constructor(props) {
      super(props);
      this.state = {data: 'Habiba' , value:''};
    }
  
    componentDidmount(){
      console.log("componentDidmount");
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (this.props.color !== nextProps.color) {
        return true;
      }
      if (this.state.data !== nextState.data) {
        return true;
      }
      return false;
    }
    componentWillUnmount(){
      console.log("componentWillUnmount");
    }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
    render() {
      return (
        <View style={styles.containerView}>
          <Text style={{fontWeight:'bold',  textAlign : 'center', fontSize: 25}}>Assignment 2</Text>

          <Text style={{ fontSize: 20, paddingTop: 20}}>Hello! this is  {this.state.data}</Text>
          <TextInput placeholder="Enter Text"
                    style={styles.input}
                    onChangeText={text=> this.setState({value:text})}
                    multiline={true}/>
          <View style={styles.button}>
          <Button 
            title="Press me"
            color={this.props.color}
            onPress={() => this.setState(state => ({data: state.value}))}
          />
          </View>
        </View>
      );
    }
  
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