import { View } from "react-native";
import TelaFundo from "./TelaFundo";


export default Tela = ({children}) =>{
    return(
        <TelaFundo caminho={'fundoCinza.jpg'}>
            <View style={{backgroundColor:'rgba(0, 0, 0, 0.36)', width:'70%', height:'60%', alignItems: 'center', justifyContent: 'flex-start'}}>
                <View style={{opacity: 0.5, width:'80%', height:'100%', alignItems: 'center', justifyContent: 'flex-start', opacity:1}}>
                    {children}
                </View>
            </View>
        </TelaFundo>
    );
}