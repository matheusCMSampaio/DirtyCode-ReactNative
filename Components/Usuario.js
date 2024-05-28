import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Tela from './Tela';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function Usuario({navigation}) {
    return (
        <Tela>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/profileIcon.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Nome do Usuário</Text>
            </View>
        </Tela>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    profileImage: {
        borderWidth: 1,
        borderColor: 'black',
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    profileName: {
        fontSize: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'space-around',
        width: '200%',
        position: 'relative',
        bottom: '-150%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingBottom: 20,
        paddingTop:5
    },
});