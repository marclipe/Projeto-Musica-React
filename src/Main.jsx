import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Inserir from './Inserir';

const imagemFundo = '../assets/imagens/guitar.webp';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require(imagemFundo)}
        style={{ width: 300, height: 150, marginBottom: 15, borderRadius: 20}}
      />

      <Text style={[styles.title]}>Projeto Música</Text>

      <TouchableOpacity style={[styles.button, {
        backgroundColor: '#F27F1B'
      }]} onClick={() => { }}>
        <Text style={styles.textButton}>Inserir Instrumento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {
        backgroundColor: '#F27F1B'
      }]} onClick={() => { }}>
        <Text style={styles.textButton}>Alterar Instrumento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {
        backgroundColor: '#F27F1B'
      }]} onClick={() => { }}>
        <Text style={styles.textButton}>Excluir Instrumento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {
        backgroundColor: '#F27F1B'
      }]} onClick={() => { }}>
        <Text style={styles.textButton}>Listar Instrumento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {
        backgroundColor: '#F27F1B'
      }]} onClick={() => { }}>
        <Text style={styles.textButton}>Buscar Instrumento</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
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
    color: '#ffffff'
  }
});