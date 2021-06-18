/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import 'react-native-gesture-handler';
 import HomeScreen from './screens/HomeScreen';
 import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import CounterScreen from './screens/CounterScreen';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import reducer from './components/counterReducer';
const Stack = createStackNavigator();
const store = createStore(reducer);


export default class App extends React.Component {
  render() {
    return (
     
        // <AppContainer />
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Counter"
              component={CounterScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  
    );
  }}
// const AppNavigator = createSwitchNavigator({
//   // Home: {
//     screen: HomeScreen,
//     count:   CounterScreen
//   // },
//   // Count: {
//   //   screen: CounterScreen
//   // },
// });
// const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// const App = () => {

  
//    return (
   
//     <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen
//               name="Home"
//               component={HomeScreen}
//               options={{ title: 'Welcome' }}
//             />
//       </Stack.Navigator>
//      </NavigationContainer>
//    );
//  };

 
//  export default App;
