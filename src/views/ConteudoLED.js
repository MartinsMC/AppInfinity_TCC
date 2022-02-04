import React, { useState } from 'react'
import { TouchableOpacity, Text, ImageBackground, StyleSheet, View, Button,SafeAreaView, Image, ScrollView, Animated } from 'react-native'

export default function ConteudoLED() {
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
              Bom, vamos lá… Por acaso você já se perguntou como são feitos os LED’s (Diodo Emissor de Luz) ou como eles funcionam? Eles estão tão difundidos dentro do nosso cotidiano que já é algo normal e acabamos por esquecer de pensar nessa parte. Porém, dentro de sua criação e de seu funcionamento existem diversas áreas de conhecimento que são bem surpreendentes.
        </Text>
        <Text style={styles.texto}>
           LED é um diodo especial. Quando o polarizamos de maneira correta ele conduzirá corrente e emitirá luz, processo conhecido como eletroluminescência.
        </Text>
        <Text style={styles.texto}>
           Abaixo nós temos algumas imagens de modelos de LED e seu símbolo. Sempre que for produzir algum projeto com um LED lembre-se da sua polarizção e de associá-lo em série com um resistor, quando necessário.
        </Text>
        <Image
            source={require('../assets/funcionamentoLED.png')}
            style={{width:250, height:250, alignSelf:"center"}}
            resizeMode="contain">
        </Image>
        <Image
            source={require('../assets/funcionamentoLED2.png')}
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