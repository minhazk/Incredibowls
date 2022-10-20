import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colours } from '../styles/global';

const FormInput = ({ label, placeholder, onChange, objectKey, keyboardType }) => {
    const handleChange = text => {
        onChange(objectKey, text);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput onChangeText={handleChange} style={styles.input} placeholder={placeholder ?? 'Type here'} keyboardType={keyboardType ?? 'default'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    input: {
        paddingVertical: 1,
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

export default FormInput;
