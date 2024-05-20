import { StyleSheet, TextInput, TouchableOpacity, View, Text, Button, ToastAndroid } from "react-native";
import Logo from "./Logo";
import Tela from "./Tela";
import axios from "axios";
import { useState } from "react";

const api = axios.create({
    baseURL: "http://10.0.2.2:8080/user"
});

export default Cadastrar = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const salvar = async (obj)=> {
        api.post('http://10.0.2.2:8080/user', obj)
        .then(()=>{
            ToastAndroid.show("Dados salvos", ToastAndroid.LONG);
        })
        .catch((err) =>{
            ToastAndroid.show("Erro ao salvar "+err, ToastAndroid.LONG)
        })
    }
    return (
        <Tela>
            <Logo />
            <View style={styles.formContainer}>
                <TextInput placeholder="Nome completo" style={styles.input} value={nome} onChangeText={setNome}/>
                <TextInput placeholder="E-mail" style={styles.input} value={email} onChangeText={setEmail}/>
                <TextInput
                    placeholder="Senha"
                    style={[styles.input, styles.passwordInput]}
                    secureTextEntry
                    value={senha} onChangeText={setSenha}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={styles.cadastrarButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Button title="Cadastrar" onPress={() => {
                    const obj = {nome, email, senha}
                    salvar(obj)

                    navigation.navigate('Login')
                }} />
            </View>
        </Tela>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: -50, 
        alignItems: 'center',
        width: '100%',
    },
    input: {
        borderWidth: 1,
        width: '100%',
        backgroundColor: 'blanchedalmond',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
        padding: 5,
        borderRadius: 5,
    },
    passwordInput: {
        marginTop: 5,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    cadastrarButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

