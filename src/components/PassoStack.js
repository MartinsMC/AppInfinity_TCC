import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default props => (
    <View style={{flex: 1}}>
            {props.voltar
                ?   <Button
                        title='Voltar'
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                : false
            }
            {props.children}
            {props.avancar
                ?   <Button
                        style={styles.menu}
                        title='Banco de Conteúdos'
                        onPress={() => {
                            props.navigation.navigate(
                                props.avancar,
                                props.avancarParams
                            )
                        }}
                    />
                : false
            }
    </View>
)
const styles = StyleSheet.create({
    menu:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 2,
        textAlign:'center',
        backgroundColor:'#68a0cf',
        borderRadius: 15,
        margin: 10,

    }
})