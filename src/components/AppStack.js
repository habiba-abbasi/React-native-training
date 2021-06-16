import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './HomeScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default AppStack = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};