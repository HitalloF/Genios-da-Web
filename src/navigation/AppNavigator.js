import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/index';
import SingUp from '../screens/SignUp/index'
import HomeScreen from '../screens/Home/index';
import About from '../screens/About/index';
import Inicial from '../screens/Inicial/index'
import Equipe from '../screens/Equipe/index'
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="SignUp" component={SingUp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Equipe" component={Equipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;