import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacacity } from 'react-native'



const Botao = ({ labelButton}) => {
    return(
        <TouchableOpacacity style={styles.butaoMenu}
        >
           <Text>{labelButton}</Text>
        </TouchableOpacacity>   
    )
}

export default Botao

const styles = StyleSheet.create({
  butaoMenu: {
        alignItems: 'center',
        textAlign:'center',
        color:"00c6c0",
        borderRadius: 15,
        margin: 10,
        width: 200,
        //height: 100,
  }
});