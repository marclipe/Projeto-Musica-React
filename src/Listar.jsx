import React from 'react'

import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function Listar(/*props*/) {
    return (
        /*<View style={styles.cards}>
            <View style={styles.cardContent}>
               {props.children}
            </View>
        </View>*/
        <View style={styles.card}>
            <Text>Pronto</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6, 
        elevation: 3, 
        backgroundColor: '#fff',
        shadowColor: '#333', 
        shadowOpacity: 0.3, 
        shadowRadius: 2, 
        marginHorizontal: 4, 
        marginVertical: 6
    },

    cardContent: {
        marginHorizontal: 18, 
        marginVertical10
    }
});