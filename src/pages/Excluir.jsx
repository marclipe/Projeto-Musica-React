import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"

import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase(
  'projetoMusica'
);

export default function Excluir() {
  const [id, setId] = React.useState('');

  function excluirInstrumento() {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM instrumentos WHERE ID = ? ',
        [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            Alert.alert('O instrumento foi excluído!')
          }
        })
    })
  }

  return (
    <View style={styles.container}>
      <View style={[styles.content]}>
          <Text style={styles.text}>ID</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite o ID"
            onChangeText={(value) => setId(value)}
          />
          <TouchableOpacity style={[styles.buttonInserir]} onPress={excluirInstrumento}>
            <Text style={[styles.textButton]} >Excluir</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
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
    fontSize: 25,
    fontStyle: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

  textInput: {
    width: 200,
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
    width: 200,
    height: 50,
    borderRadius: 10

  },

  textButton: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center'
  }
});