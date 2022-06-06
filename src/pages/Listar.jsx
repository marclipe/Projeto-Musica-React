import React from 'react'

import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function Listar(/*props*/) {
    return (
        <View style={styles.container}>

        <TouchableOpacity style={styles.card}>
            <Text style={styles.instrument}>Violão</Text>
            <Text style={styles.type}>Cordas</Text>
            <Text style={styles.value}>R$ 150,00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
            <Text style={styles.instrument}>Violão</Text>
            <Text style={styles.type}>Cordas</Text>
            <Text style={styles.value}>R$ 150,00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
            <Text style={styles.instrument}>Violão</Text>
            <Text style={styles.type}>Cordas</Text>
            <Text style={styles.value}>R$ 150,00</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        alignItems: "center",
        width: 300,
        height: 130,
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
        marginVertical: 10
    },
    instrument: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F27F1B'
    },
    type:{
        marginTop: -10,
        fontSize: 16,
        color: '#6B6B6B'
    },

    value: {
        marginTop: 30,
        paddingBottom: 20,
        fontSize: 24
    }
});