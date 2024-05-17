import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './Inicio';
import Login from './Login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0, // Remove a sombra no Android
          shadowOpacity: 0, // Remove a sombra no iOS
        },
        headerTransparent: true,
        headerTitleStyle: {
          color: 'white', // Define a cor do texto do título
        },
        headerTintColor: 'white', // Define a cor dos ícones e do texto do botão de voltar
      }}
    >
      <Stack.Screen name="Home" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default MyStack;
