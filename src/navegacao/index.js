import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import Tab from './Tab'
//import Stack from './Stack'

import TelaMenu from '../views/TelaMenu'
import TelaConteudo from '../views/TelaConteudo'
import TelaProjetos from '../views/TelaProjetos'
import ConteudoLED from '../views/ConteudoLED'
import ConteudoBinario from '../views/ConteudoBinario'
import NovoProjeto from '../views/NovoProjeto'
import CarregarProjeto from '../views/CarregarProjeto'

const Tab = createBottomTabNavigator();

function Projeto() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="NovoProjeto" component={NovoProjeto} tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "blue",
        labelStyle:{fontSize: 15}
    }}>
     </Tab.Screen>
           <Tab.Screen name="CarregarProjeto" component={CarregarProjeto} tabBarOptions={{
              activeTintColor: "red",
              inactiveTintColor: "blue",
              labelStyle:{fontSize: 15}
            }}>
    </Tab.Screen>
    </Tab.Navigator>
  );
}


function Carregar() {
    return(
        <Tab.Navigator>
           <Tab.Screen name="CarregarProjeto" component={CarregarProjeto} tabBarOptions={{
              activeTintColor: "red",
              inactiveTintColor: "blue",
              labelStyle:{fontSize: 15}
            }}>
            </Tab.Screen>
             <Tab.Screen name="NovoProjeto" component={NovoProjeto} tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "blue",
        labelStyle:{fontSize: 15}
    }}>
    </Tab.Screen>
        </Tab.Navigator>
    );
}
function LED() {
    return(
        <Tab.Navigator>
           <Tab.Screen name="Conteudo sobre LED" component={ConteudoLED} tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "blue",
        labelStyle:{fontSize: 15}
        }}>
        </Tab.Screen>
        <Tab.Screen name="CarregarProjeto" component={CarregarProjeto} tabBarOptions={{
              activeTintColor: "red",
              inactiveTintColor: "blue",
              labelStyle:{fontSize: 15}
            }}>
            </Tab.Screen>
             <Tab.Screen name="NovoProjeto" component={NovoProjeto} tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "blue",
        labelStyle:{fontSize: 15}
    }}>
    </Tab.Screen>
    <Tab.Screen name="Menu" component={TelaMenu} tabBarOptions={{
              activeTintColor: "red",
              inactiveTintColor: "blue",
              labelStyle:{fontSize: 15}
            }}>
            </Tab.Screen>
        </Tab.Navigator>

    );
}
function Binario() {
    return(
        <Tab.Navigator>
           <Tab.Screen name="ConteudoBinario" component={ConteudoBinario} tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "blue",
        labelStyle:{fontSize: 15}
    }}>
        </Tab.Screen>
        </Tab.Navigator>
    );
}

const Stack1 = createNativeStackNavigator();

function TelasStaks() {
  return (
    <Stack1.Navigator>
        
        <Stack1.Screen name="ConteudoBinario" component={Binario}>
        </Stack1.Screen>
    </Stack1.Navigator>
  );
}

const Stack = createNativeStackNavigator()
export default props => (
    <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaMenu"
        screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaMenu" component={TelaMenu}>
            </Stack.Screen>
            <Stack.Screen name="TelaConteudo" component={TelaConteudo}>
            </Stack.Screen>
            <Stack.Screen name="TelaProjetos" component={TelaProjetos}>
            </Stack.Screen>
            <Stack.Screen name="NovoProjeto" component={Projeto}>
            </Stack.Screen>  
            <Stack.Screen name="ConteudoLED" component={LED}>
            </Stack.Screen>
            <Stack.Screen name="ConteudoBinario" component={ConteudoBinario}>
            </Stack.Screen>      
            <Stack.Screen name="CarregarProjeto" component={Carregar}>
            </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
)