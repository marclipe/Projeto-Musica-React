import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Inserir from './Inserir';

//import imagemFundo from '../assets/imagens/guitar.webp';

export default function App() {
  const navigation = useNavigation()
  function handleNavigate(route) {
    navigation.navigate(route)
  }

  return (
    <View style={styles.container}>
      

      <Text style={[styles.title]}>Projeto Música</Text>

      <TouchableOpacity 
        style={[styles.button, {
          backgroundColor: '#F27F1B'
        }]}
       onPress={() => handleNavigate("Inserir")}
      >
        <Text style={styles.textButton}>Inserir Instrumento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {
        backgroundColor: '#F27F1B'
      }]} onPress={() => handleNavigate("Alterar")}>
        <Text style={styles.textButton}>Alterar Instrumento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {
        backgroundColor: '#F27F1B'
      }]} onPress={() => handleNavigate("Listar")}>
        <Text style={styles.textButton}>Listar Instrumento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {
        backgroundColor: '#F27F1B'
      }]} onPress={() => handleNavigate("Buscar")}>
        <Text style={styles.textButton}>Buscar Instrumento</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}


/*=//=// style =//=// */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
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