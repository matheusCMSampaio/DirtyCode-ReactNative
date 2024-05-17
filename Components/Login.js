import React from "react";
import { TextInput, TouchableOpacity, Button, View, Image, Text, StyleSheet } from "react-native";
import Tela from "./Tela";
import Logo from "./Logo";

export default Login = ({navigation}) => {
  return (
    <Tela>
      <Logo/>
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput
        placeholder="Senha"
        style={[styles.input, styles.passwordInput]}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate('Cadastro')}}>
          <Text style={styles.cadastrarButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={() => { navigation.navigate('Usuario') }} />
    </Tela>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: 'blanchedalmond',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: "-10%", 
    padding: 5,
    borderRadius: 5,
  },
  passwordInput: {
    marginTop: 5, 
    marginBottom: 5, 
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: "20%", 
  },
  cadastrarButtonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

