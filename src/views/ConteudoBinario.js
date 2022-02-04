import React, { useState } from 'react'
import { TouchableOpacity, Text, ImageBackground, StyleSheet, View, Button,SafeAreaView, Image, ScrollView, Animated } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function ConteudoBinario() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
         style={[styles.header,
         {
           height:scrollY.interpolate({
             inputRange:[10, 160, 185],
             outputRange:[140, 20, 0],
             extrapolate: "clamp",
           }),
           opacity: scrollY.interpolate({
             inputRange:[1, 75, 170],
             outputRange:[1, 1, 0],
             extrapolate: "clamp",
           })
         }
         ]}
      >
         <Image
            source={require('../assets/menu.png')}
            style={{width:30, height:30}}
            resizeMode="contain"
         />
         <Animated.Image
            source={require('../assets/logo.png')}
            style={{
              width: scrollY.interpolate({
                inputRange:[0, 120],
                outputRange:[300,140],
                extrapolate: "clamp",
              }),
              height:150}}
            resizeMode="contain"
         />
         <Image
            source={require('../assets/opcoes.png')}
            style={{width:30, height:30}}
            resizeMode="contain"
         />
      </Animated.View>

      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent:{
            contentOffset: { y: scrollY}
          },
        }],
        { useNativeDriver: false })}
      >
       <View style={styles.container3}>
        <Text style={styles.texto}>
              No nosso meio temos smartphone, computador ou notebook. Porém, o que pouca gente sabe é de que maneira as máquinas com circuitos digitais funcionam. 
Como as mais diversas informações chegam a aparelhos tecnológicos? Como as peças do seu celular conversam entre si. 

        </Text>
        <Text style={styles.texto}>
           A resposta é simples e se resume em duas palavras: código binário. O código binário é o responsável pelo funcionamento de praticamente qualquer máquina 
com que você interage atualmente. Ele, por exemplo, transforma o texto digitado em um teclado em uma letra de fato.

        </Text>
        <Image
            source={require('../assets/binario.png')}
            style={{width:400, height:200, alignSelf:"center"}}
            resizeMode="contain">
        </Image>
        <Text style={styles.texto}>
           Código Binário é composto de apenas dois números, o 0 e 1. E para entendermos melhor como um computador se comunica por este código podemos usar um exemplo do nosso dia-a-dia. 
Na nossa casa, a lâmpada mais simples que temos tem dois modos de funcionamento, acessa ou apagada. Neste caso, apagada seria um 0 e acessa seria 1. E assim o computador se comunica, com 
a presença ou ausência de energia.

        </Text>
        <Text>

        </Text>

        <Text style={styles.texto,{textAlign: "center",fontSize: 22,fontWeight: "bold",color: '#fff',}}>

           Como podemos converter um número decimal para binário?
        </Text>

        <Text style={styles.texto}>
           A maneira mais fácil de converter um número decimal em binário é dividi-lo por 2. Faça a divisão manualmente e anote o resto (como você está dividindo por 2, o resto será sempre 1 ou 0).
 Pegue o quociente dessa divisão e continue dividindo por dois, até que o quociente seja 1 (2 dividido por 2). Veja o exemplo abaixo.
        </Text>
        <Image
            source={require('../assets/binario2.png')}
            style={{width:400, height:400, alignSelf:"center"}}
            resizeMode="contain">
        </Image>
      </View>
     </ScrollView>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
  texto:{
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center",
    textAlign: "justify",
    fontSize: 18,
  },  
  header:{
    backgroundColor: "#00c6c0",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingRight:10,
    paddingLeft:10,
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
  },
  container3:{
    alignSelf: "center",
    height:'100%',
    justifyContent:'space-evenly',
    paddingBottom: 50,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#061e43",
  },
  buttonIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00c6c0',
    borderWidth: 0.5,
    height: 75,
    margin: 250,
    borderRadius: 15,
    margin: 20,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center",
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});