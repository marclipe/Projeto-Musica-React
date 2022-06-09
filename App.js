import React from 'react'
import Routes from './src/app.routes'
import * as SQLite from 'react-native-sqlite-storage'
import config from '../projetoMusica/src/database/config'
import { useEffect, useState } from 'react/cjs/react.production.min'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated'
import { Alert } from 'react-native-web'

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
    getData()
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "Users "
        + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT, Valor INTEGER, Tipo TEXT);"
      )
    });
  }

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData');
      then(value => {
        if (value != null) {
          navigation.navigate('config');
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const setData = async () => {
    if (nome.length == 0 || valor == 0 || tipo == 0) {
      Alert.alert('ERRO!!, Por favor insira os dados!!')
    } else {
      try {
        /*var user = {
          Nome: nome,
          Valor: valor,
          Tipo: tipo
        }
        await AsyncStorage.setItem('UserData', JSON.stringify(user));*/
        await db.transaction(async (tx) => {
          /*await tx.transactionSql(
            "INSERT INTO Users (Nome, Tipo) VALUES ('"+nome+"', '"+tipo+"', '"+valor+"')"
          );*/
          await tx.executeSql(
            "INSERT INTO Users (Nome, Tipo, Valor) VALUES (?,?,?)",
            [nome, valor, tipo]
          );
        }); 
        navigation.navigate('config')
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Routes />
    // <Alterar />
  );
}
