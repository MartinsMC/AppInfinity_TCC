import React, { useState } from 'react'
import { TouchableOpacity, Text, ImageBackground, StyleSheet, View, Button,SafeAreaView, Image, ScrollView, Animated } from 'react-native'
import TextoCentral from '../components/TextoCentral'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function TelaConteudo({ navigation }) {
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
      <ImageBackground 
        source={require('../assets/fundoProjeto2.png')} 
      > 
      <View style={styles.container3}>
       <View style={styles.alinhamento1}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Fundamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Bit e Byte</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Comandos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Programação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Estrutura Repetição</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.alinhamento2}>
        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Introdução</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Computador</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Um pouco de Lógica</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.5}
          onPress= {() => navigation.navigate("ConteudoBinario")}
        >
          <Text style={styles.textoButton}>Código Binário</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.5}>
          <Text style={styles.textoButton}>Estrutura Condicional</Text>
        </TouchableOpacity>
      </View>  
      </View>
      </ImageBackground>
     </ScrollView>
     
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
  textoButton:{
    fontSize: 20,
    fontWeight: "bold",
    color:"#061e43",
    fontFamily: "Montserrat Bold Italic",
    textAlign: "center"
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#00c6c0",
    padding: 5,
    borderRadius: 15,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 0,
    width: 135,
    height: 66,
    alignItems: 'center',
    justifyContent: "space-around",
  },
  button2: {
    alignSelf: "flex-start",
    backgroundColor: "#00c6c0",
    padding: 10,
    borderRadius: 15,
    marginLeft: 20,
    marginBottom: 70,
    marginTop: 0,
    width: 135,
    height: 66,
    alignItems: 'center',
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
    width: '100%',
    height:'100%',
    justifyContent:'space-evenly',
    paddingTop: 0,
    flexDirection:"row",
  },
  alinhamento1:{
    justifyContent: "space-around",
    width: "50%",
    height:"100%",
    paddingLeft: 10,
  },
  alinhamento2:{
    width: "50%",
    height:"100%",
    justifyContent: "space-evenly",
    paddingBottom: 30,
    paddingTop: 10,
    paddingLeft: 40,
  },
  fundo:{
    alignSelf: "center",
    width: '100%',
    height:'100%',
    justifyContent:'center',
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