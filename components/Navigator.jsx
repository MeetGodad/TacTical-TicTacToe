import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage from './SignUpPage';
import LoginPage from './LoginPage';
import AppMenu from './AppMenu';
import GameBoard from './GameBoard';
import GameResult from './GameResult';
import GameHistory from './GameHistory';
import Settings from './Settings';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupPage">
        <Stack.Screen name="SignupPage" component={SignupPage} options={{ title: 'Signup' }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Login' }} />
        <Stack.Screen name="AppMenu" component={AppMenu} options={{ title: 'App Menu' }} />
        <Stack.Screen name="GameBoard" component={GameBoard} options={{ title: 'Game Board' }} />
        <Stack.Screen name="GameResult" component={GameResult}/>
        <Stack.Screen name="GameHistory" component={GameHistory} options={{ title: 'Game History' }} /> 
        <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
