import React from "react";
import { TextInput, TouchableOpacity, Button, View, Image, Text, StyleSheet } from "react-native";
import TelaFundo from "./TelaFundo";
import Tela from "./Tela";

export default Login = () => {
  return (
    <Tela>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput
        placeholder="Senha"
        style={[styles.input, styles.passwordInput]}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { /* ação de cadastro */ }}>
          <Text style={styles.cadastrarButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={() => { /* ação de login */ }} />
    </Tela>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '70%', // Ajuste a altura conforme necessário
    marginTop: '-40%', // Reduza a margem superior
    resizeMode: 'contain', // Ajuste para manter a proporção da imagem
  },
  input: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: 'blanchedalmond',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: "-10%", // Reduza a margem superior para aproximar os inputs
    padding: 5,
    borderRadius: 5,
  },
  passwordInput: {
    marginTop: 5, // Reduza a margem superior
    marginBottom: 5, // Reduza a margem inferior
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: "20%", // Reduza a margem inferior
  },
  cadastrarButtonText: {
    color: 'blue', // Ajuste a cor do texto conforme necessário
    fontSize: 18,
    fontWeight: 'bold',
  },
});

