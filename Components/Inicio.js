import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import TelaFundo from "./TelaFundo";

export default Inicio = ({navigation}) => {
  return (
    <TelaFundo caminho={'background1.jpg'}>
        <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex:1,justifyContent: 'flex-start', alignItems: 'flex-start', padding:80}}>
                <Text style={styles.texto}>Bem-Vindo</Text>
            </View>
            <View style={{flex:1,padding:50}}>
                <Button title="Iniciar" onPress={()=> navigation.navigate('Login')}/>
            </View>
        </View>
    </TelaFundo>
  );
};

const styles = StyleSheet.create({
    texto:{
        fontSize:50,
        color:'white',
    },
})