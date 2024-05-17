import { StyleSheet, TextInput, TouchableOpacity, View, Text, Button } from "react-native";
import Logo from "./Logo";
import Tela from "./Tela";

export default Cadastrar = ({ navigation }) => {
    return (
        <Tela>
            <Logo />
            <View style={styles.formContainer}>
                <TextInput placeholder="Nome completo" style={styles.input} />
                <TextInput placeholder="E-mail" style={styles.input} />
                <TextInput
                    placeholder="Senha"
                    style={[styles.input, styles.passwordInput]}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={styles.cadastrarButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Button title="Cadastrar" onPress={() => { /* ação de login */ }} />
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

