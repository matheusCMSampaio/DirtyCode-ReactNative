import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import TelaFundo from "./TelaFundo"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default Chat = ({navigation}) =>{
    return(
        <TelaFundo caminho={'background1.jpg'}>
            <View style={{flex:2,width:'100%', height:'100%', backgroundColor:'rgba(120,120,120,0.4)', justifyContent:"flex-end", alignItems:"center"}}>
                <Text style={{color:'red', fontSize:24}}>Em desenvolvimento</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate('Chat')}}>
                    <Entypo name="chat" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { /* Ação do segundo botão */ }}>
                    <FontAwesome name="wpforms" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Usuario') }}>
                    <AntDesign name="user" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </TelaFundo>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'space-around',
        width: '100%',
        height:'10%',
        position: 'relative',
        bottom: '-8%',
        backgroundColor: 'rgba(0, 0, 0,0.6)',
        paddingBottom: 50,
        paddingTop:5
    }
})