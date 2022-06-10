import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useState } from "react";
import { Alert } from "react-native";
import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase(
    'projetoMusica'
);

export default function Inserir() {
    const [nome, setNome] = useState(''); 
    const [valor, setValor] = useState(); 
    const [tipo, setTipo] = useState(''); 

    function novoInstrumento() {

            db.transaction(tx => {
              tx.executeSql('INSERT INTO Instrumentos (Nome, Valor, Tipo) values (?, ?, ?)', [ nome, 120, tipo],
                (txObj, resultSet) => {
                    Alert.alert('Instrumento Cadastrado!!')
                },
                (txObj, error) => console.log('Error', error))
            })
           
            
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
               
                <Text style={[styles.text]}>
                    Nome:
                </Text>
                <TextInput 
                    style={[styles.textInput]} 
                    placeholder="Nome" 
                    onChangeText={(value) => setNome(value)}/>

                <Text style={[styles.text]}>
                    Valor (R$):
                </Text>

                <TextInput style={[styles.textInput]} placeholder="Valor" onChangeText={(value) => setValor(value)} />

                <Text style={[styles.text]}>
                    Tipo:
                </Text>
                <TextInput style={[styles.textInput]} placeholder="Tipo" onChangeText={(value) => setTipo(value)}/>
                <TouchableOpacity style={[styles.buttonInserir]} onPress={novoInstrumento}>
                    <Text style={[styles.textButton]}>Inserir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    content: {
        marginLeft: 30
    },

    title: {
        color: '#402107',
        fontSize: 30,
        paddingBottom: 20,
        fontStyle: 'bold'
    },

    text: {
        color: '#F27F1B',
        fontSize: 20,
        marginBottom: 10
    },

    textInput: {
        width: 350,
        height: 40,
        borderWidth: 1,
        borderColor: '#402107',
        marginBottom: 10,
        borderRadius: 10
    },

    buttonInserir: {
        backgroundColor: '#F27F1B',
        padding: 6,
        marginTop: 10,
        width: 250,
        height: 50,
        borderRadius: 10,
        shadowColor: "#000",
        elevation: 2, 
    },

    textButton: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center'
    }
});