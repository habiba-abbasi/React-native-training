/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList,Button} from 'react-native';
import {connect} from 'react-redux';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
  };
    fetch('https://reqres.in/api/posts')
      .then(res => res.json())
      .then(  
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        );
      }
  render() {
  //   <View style={styles.containerView}>
  //   <Text style={{fontWeight:'bold',  textAlign : 'center', fontSize: 25}}>Assignment 3</Text>

  //   <Text style={{ fontSize: 20, paddingTop: 20}}>Count:{this.props.count}</Text>
  
  //   <View style={styles.button}>
  //   <Button 
  //   style = {styles.button}
  //     title="Updating count"
  //     onPress={() => this.props.navigation.navigate('Counter')}
  //   />
  //   </View>
  // </View>
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (<View><Text> Error: {error.message}</Text></View>);
    } else if (!isLoaded) {
      return (<View><Text>Loading...</Text></View>);
    } else {
      return(
        <View style={styles.container}>
            <FlatList
            vertical
            showsHorizontalScrollIndicator={false}
            data={items}
            keyExtractor = {item => item.id}
            renderItem={ ({item}) =>{
             return( <Item title={item.name} />);
            }
          }
          />
          <Button  title="Go For Axios demo" style={styles.actionButtonIcon} onPress={() => this.props.navigation.navigate('Counter')}/>
           </View>
      );
    }
  }
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const mapStateToProps = state => {
  const {count} = state.countReducer;
  return {count};

};
export default connect(mapStateToProps)(HomeScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
  },
  containerView: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
    flex: 1,
  },
  input: {
    width: 200,
    paddingTop: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },title: {
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
  },
});
