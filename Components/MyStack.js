import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Inicio from './Inicio';
import Login from './Login';
import Cadastrar from './Cadastrar';
import Usuario from './Usuario';
import Chat from './Chat';
import Forms from './Forms';

const Stack = createStackNavigator();




function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTransparent: true,
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Home" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastrar} />
      <Stack.Screen
        name='Usuario'
        component={Usuario}
        options={({ navigation }) => ({
          title: 'Exit',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="exit-to-app" size={25} color="white" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name='Chat' component={Chat}/>
      <Stack.Screen name='Forms' component={Forms}/>
    </Stack.Navigator>
  );
}

export default MyStack;
