import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react/cjs/react.production.min';
import SQLite from 'react-native-sqlite-storage'
/* ======= Passo 1 BD ======*/
const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default'
    },
    () => { },
    error => { console.log(error) }
);



export default function App({ navigation }) {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        createTable(); 
        getData();
    }, []);

    /* ======= Passo 2 TABLE ======*/
    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT, Valor INTEGER, Tipo TEXT);"
            )
        })
    }

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData');
            then(value => {
                if (value != null) {
                    navigation.navigate('Main');
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (nome.length == 0 || valor.length == 0 || tipo.length == 0) {
            Alert.alert('ERRO!! Por favor insira os dados')
        } else {
            try {
                /*user = {
                    Name: name,
                    Valor: valor,
                    Tipo: tipo
                }
                await AsyncStorage.setItem('UserData'.JSON.stringify(user))*/
                db.transaction((tx) => {
                    /*await tx.executeSql(
                        "INSERT INTO Users (Name, Valor, Tipo) VALUES ('" + name + "', " + valor + ", " + tipo + ")" 
                    );*/
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Valor, Tipo) VALUES (?,?,?)", [nome, valor, tipo]
                    );
                })
                navigation.navigate('App')
            } catch (error) {
                console.log(error);
            }
        }

        return (
            <View style={styles.container}>
            </View>
        );
    }

    /*
        /*=//=// style =//=// */
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center'
        },

        title: {
            paddingTop: 20,
            color: '#402107',
            fontSize: 25,
            marginBottom: 10
        },

        button: {
            padding: 6,
            width: 200,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            elevation: 2,
            marginVertical: 12,
            borderRadius: 10
        },

        textButton: {
            color: '#ffffff',
            fontSize: 20,
            textAlign: 'center'
        }
    });
}