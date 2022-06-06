import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function Excluir() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.buttonInserir]}>
                <Text style={[styles.textButton]}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 30,
        fontStyle: 'bold',
        marginBottom: 10
    },

    textInput: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: '#402107',
        marginBottom: 10
    },

    buttonInserir: {
        backgroundColor: '#F27F1B',
        padding: 6,
        marginTop: 10,
        width: 90,
        height: 50,
        borderRadius: 10
    },

    textButton: {
        fontSize: 25,
        color: '#fff',
    }
});