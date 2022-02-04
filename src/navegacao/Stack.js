import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import TelaMenu from '../views/TelaMenu'
import TelaConteudo from '../views/TelaConteudo'
import TelaProjetos from '../views/TelaProjetos'
import ConteudoLED from '../views/ConteudoLED'
import ConteudoBinario from '../views/ConteudoBinario'
//import PassoStack from '../components/PassoStack'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaMenu"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaMenu" component={TelaMenu}>
        </Stack.Screen>
        <Stack.Screen name="TelaConteudo" component={TelaConteudo}>
        </Stack.Screen>
        <Stack.Screen name="TelaProjetos" component={TelaProjetos}>
        </Stack.Screen>
        <Stack.Screen name="ConteudoLED" component={ConteudoLED}>
        </Stack.Screen>
        <Stack.Screen name="ConteudoBinario" component={ConteudoBinario}>
        </Stack.Screen>
    </Stack.Navigator>
)