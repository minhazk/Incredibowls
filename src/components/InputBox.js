import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colours } from '../styles/global';

const InputBox = ({ label, placeholder, keyboardType }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholder={placeholder ?? 'Type here'} keyboardType={keyboardType ?? 'default'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 5,
    },
    input: {
        paddingVertical: 1.5,
        color: 'black',
        borderRadius: 5,
        fontSize: 12,
    },
    label: {
        color: colours.primary,
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default InputBox;
