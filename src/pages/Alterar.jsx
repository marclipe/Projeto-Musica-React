import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"
import { useState } from "react";

import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase(
  'projetoMusica'
);

export default function Alterar() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState();
  const [valor, setValor] = useState();
  const [tipo, setTipo] = useState();

  function updateInstrumento() {

    db.transaction(tx => {
      tx.executeSql('UPDATE instrumentos SET Nome = ?, Valor = ?, Tipo = ? WHERE ID = ?', 
        [nome, valor, tipo, id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            Alert.alert('Alterou a tabela!')
          }
        })
    })

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>ID:</Text>
        <TextInput style={styles.textInput} onChangeText={(value) => setId(value)} />
        <Text style={[styles.text]}>
          Nome:
        </Text>
        <TextInput style={[styles.textInput]} onChangeText={(value) => setNome(value)} />
        <Text style={[styles.text]}>
          Valor (R$):
        </Text>
        <TextInput style={[styles.textInput]} onChangeText={(value) => setValor(value)} />
        <Text style={[styles.text]}>
          Tipo:
        </Text>
        <TextInput style={[styles.textInput]} onChangeText={(value) => setTipo(value)} />
        <TouchableOpacity style={[styles.buttonInserir]} onPress={updateInstrumento} >
          <Text style={[styles.textButton]}>Alterar</Text>
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
    width: 350,
    height: 50,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 2,
  },

  buttonExcluir: {
    backgroundColor: '#F27F1B',
    padding: 6,
    marginTop: 10,
    width: 350,
    height: 50,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 2
  },

  textButton: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center'
  }
});