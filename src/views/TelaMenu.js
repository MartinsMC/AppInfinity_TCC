import React from 'react'
import { Text, TouchableOpacity, ImageBackground, StyleSheet, View, Button, Image, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default props => (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
           source={require('../assets/fundo.png')} 
           style={styles.imageBackground}>
           <Image
               style={styles.posimagem}
               source={require('../assets/logo.png')}>
           </Image>
        <View style={{
             alignSelf: "center",
             width: '100%',
             height:'100%',
             justifyContent:'flex-end',
             marginBottom: 40}}>
           <TouchableOpacity
             style={styles.button}
             onPress= {() => props.navigation.navigate("NovoProjeto")}
           >
             <Text style={styles.textoButton}>Novo Projeto</Text>
           </TouchableOpacity>
           <TouchableOpacity
             style={styles.button}
             onPress= {() => props.navigation.navigate("CarregarProjeto")}
           >
             <Text style={styles.textoButton}>Carregar Projeto</Text>
           </TouchableOpacity>  
           <TouchableOpacity
             style={styles.button}
             onPress= {() => props.navigation.navigate("TelaConteudo")}
           >
             <Text style={styles.textoButton}>Aprenda a Programar</Text>
           </TouchableOpacity>  
           <TouchableOpacity
             style={styles.button}
             onPress= {() => props.navigation.navigate("TelaProjetos")}
           >
             <Text style={styles.textoButton}>Aprenda Robótica</Text>
           </TouchableOpacity>    
        </View>    
    </ImageBackground>   
  </SafeAreaView>  
)
const styles = StyleSheet.create({
  textoButton:{
    fontSize: 20,
    fontWeight: "bold",
    color:"#FFF",
    fontFamily: "Montserrat Bold Italic"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  posimagem: {
    position: "absolute",
    top: 40,
    left: 100,
    right: 0,
    bottom: 0,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  imageForeground: {
    width: 250,
    height: 250
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#00c6c0",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 250,
    alignItems: 'center',
    justifyContent: "flex-end"
  },
});