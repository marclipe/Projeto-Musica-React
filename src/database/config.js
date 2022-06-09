import React, { useState } from 'react'
import * as SQLite from 'react-native-sqlite-storage'
import App from '../../App';
/* ======= Passo 1 BD ======*/
const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default'
    },
    () => { },
    error => { console.log(error) }
);

export default function App({}) {
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

