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