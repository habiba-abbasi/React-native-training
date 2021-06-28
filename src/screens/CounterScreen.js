/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
 class CounterScreen extends React.Component {
  state = {
    persons: [],
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
      }
   ;
  render() {
    return (
     <View style={styles.container}>
     <FlatList
     vertical
     showsHorizontalScrollIndicator={false}
     data={this.state.persons}
     keyExtractor = {item => item.id}
     renderItem={ ({item}) =>{
      return( <Item title={item.name} />);
     }
   }
   />
   </View>

      // <View  style = {styles.containerView}>
      //   <Text  >Counter: {this.props.count}</Text>
      //   <View style = {styles.button}>
      //     <Button   title="Decrement" onPress={()=>this.props.dispatch({ type: 'DECREMENT' })}>-</Button>
         
      //     </View>
      //     <View style = {styles.button}>
      //     <Button   title="Increment"onPress={()=>this.props.dispatch({ type: 'INCREMENT' })}>+</Button>
      //     </View>
      //   <View style={styles.backButton}>
      
      // <Button
      //  style = {styles.button}
      //  
      //   onPress={() =>
      //     this.props.navigation.navigate('Home')
      //   }
      // />
      // </View>
      // </View>
    );
  }
}
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)
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
    justifyContent : 'center',
  },
  button:{
      marginBottom: 10,
      marginTop: 10,
  },
  backButton:{
    marginBottom: 10,
    marginTop: 10,
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
},
});