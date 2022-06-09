import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function Alterar() {
    return (
        <View style={styles.container}>
            <View style={[styles.content]}>
                <Text style={[styles.text]}>
                    Id:
                </Text>
                <TextInput style={[styles.textInput]} />
                <Text style={[styles.text]}>
                    Nome:
                </Text>
                <TextInput style={[styles.textInput]} />
                <Text style={[styles.text]}>
                    Valor (R$):
                </Text>
                <TextInput style={[styles.textInput]} />
                <Text style={[styles.text]}>
                    Tipo:
                </Text>
                <TextInput style={[styles.textInput]} />
                <TouchableOpacity style={[styles.buttonInserir]} onPress={() => handleNavigate("Inserir")}>
                    <Text style={[styles.textButton]}>Alterar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonExcluir]}>
                    <Text style={[styles.textButton]}>Excluir</Text>
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