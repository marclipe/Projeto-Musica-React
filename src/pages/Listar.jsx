import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native"

import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabase(
  'projetoMusica'
);

export default function Listar() {
  const [instrumentos, setInstrumentos] = useState([]);

  function listarInstrumentos() {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Instrumentos', null,
        (txObj, { rows: { _array } }) => setInstrumentos(_array)
      )
    })
  }

  useEffect(() => {
    listarInstrumentos();
  })

  

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.view}
        data={instrumentos}
        keyExtractor={(item) => item.ID}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.instrument}>{item.Nome}</Text>
            <Text style={styles.type}>{item.Tipo}</Text>
            <Text style={styles.value}>{item.Valor}</Text>
          </TouchableOpacity>
        )}
      />
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
  type: {
    marginTop: -10,
    fontSize: 16,
    color: '#6B6B6B'
  },

  value: {
    marginTop: 30,
    paddingBottom: 20,
    fontSize: 24
  },

  view: {
    width: 300,
    marginTop: 30,


  }
});