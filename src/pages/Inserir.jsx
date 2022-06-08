import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function Inserir() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={[styles.title]}>
                    Inserir Instrumento
                </Text>
                <Text style={[styles.text]}>
                    Id:
                </Text>
                <TextInput style={[styles.textInput]} placeholder="Id" autoFocus />

                <Text style={[styles.text]}>
                    Nome:
                </Text>
                <TextInput style={[styles.textInput]} placeholder="Nome" />

                <Text style={[styles.text]}>
                    Valor (R$):
                </Text>
                <TextInput style={[styles.textInput]} placeholder="Valor" />

                <Text style={[styles.text]}>
                    Tipo:
                </Text>
                <TextInput style={[styles.textInput]} placeholder="Tipo" />
                <TouchableOpacity style={[styles.buttonInserir]}>
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