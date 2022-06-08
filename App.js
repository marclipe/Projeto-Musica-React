import React from 'react'

import Routes from './src/app.routes'
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


const setData = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT Name, Valor, Tipo FROM Users WHERE ID=1",
        [],
        (tx, results) => {
          let len = results.rows.length
          if (len > 0) {
            let userNome = results.rows.item(0).Nome;
            let userValor = results.rows.item(0).Valor;
            let userTipo = results.rows.item(0).Tipo;  
            setNome(userNome);
            setValor(userValor);
            setTipo(userTipo);  
          }
        }
      );
    })
    navigation.navigate('App')
  } catch (error) {
    console.log(error);
  }
}

export default function App() {

  return (
    <Routes />
    // <Alterar />
  );
}
