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
 import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 import HomeScreen from './components/HomeScreen';
 
 const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';

 
const App = () => {

  
   return (
   
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Welcome' }}
            />
      </Stack.Navigator>
     </NavigationContainer>
   );
 };

 
 export default App;
