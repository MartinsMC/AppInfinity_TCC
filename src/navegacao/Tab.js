import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import TelaMenu from '../views/TelaMenu'
import TelaConteudo from '../views/TelaConteudo'
import TelaProjetos from '../views/TelaProjetos'
import ConteudoLED from '../views/ConteudoLED'
import ConteudoBinario from '../views/ConteudoBinario'
import NovoProjeto from '../views/NovoProjeto'
import CarregarProjeto from '../views/CarregarProjeto'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "blue",
        labelStyle:{fontSize: 30}
    }}>
        <Tab.Screen name="TelaConteudo" component={TelaConteudo}>
        </Tab.Screen>
        <Tab.Screen name="TelaProjetos" component={TelaProjetos}>
        </Tab.Screen>
        <Tab.Screen name="NovoProjeto" component={NovoProjeto}>
        </Tab.Screen>
        <Tab.Screen name="CarregarProjeto" component={CarregarProjeto}>
        </Tab.Screen>
    </Tab.Navigator>
)