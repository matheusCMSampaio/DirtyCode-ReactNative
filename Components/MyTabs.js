import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Usuario from "./Usuario";
import Chat from "./Chat";
import Forms from "./Forms";
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName="Usuario"
            screenOptions={{
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor:'transparent',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0, 
                },
                headerShown: false
            }
            }
        >
            <Tab.Screen
                name="Usuario"
                component={Usuario}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="message1" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Forms"
                component={Forms}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="form" color={color} size={size} />
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}