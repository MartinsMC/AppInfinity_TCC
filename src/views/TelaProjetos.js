import React, { useState } from 'react'
import { TouchableOpacity, Text, ImageBackground, StyleSheet, View, Button,SafeAreaView, Image, ScrollView, Animated } from 'react-native'
import TextoCentral from '../components/TextoCentral'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function TelaProjeto({ navigation }) {
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
                <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/pushbutton.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
                 PUSHBUTTON
           Práticas com Botões
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/ldr.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
                SENSOR LDR
   Entenda o seu funcionamento
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/ultrassom.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
           SENSOR ULTRASSOM
   Entenda o seu funcionamento
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/resistor.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
                    RESISTOR
          Física elétrica básica
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/potenciometro.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
            POTENCIÔMETRO
          Física elétrica básica
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/led.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
                    LED RGB
  Entenda o seu funcionamento
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}
          onPress= {() => navigation.navigate("ConteudoLED")}
        >
          <Image
            source={require('../assets/led.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
                       LED
  Entenda o seu funcionamento
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/led.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
                       LED
  Entenda o seu funcionamento
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/led.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
                       LED
  Entenda o seu funcionamento
          `}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonIconStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/led.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle, {fontWeight: "bold"}}>{`
                       LED
  Entenda o seu funcionamento
          `}</Text>
        </TouchableOpacity>
      </View>
     </ScrollView>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
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