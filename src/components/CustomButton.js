import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { colours } from '../styles/global';

const CustomButton = ({ onPress, label, style }) => {
    return (
        <Pressable style={{ ...styles.pressable, ...style }} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: colours.secondary,
        borderRadius: 5,
        padding: Platform.OS === 'ios' ? 13 : 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 5,
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: Platform.OS === 'ios' ? 17 : 14,
    },
});

export default CustomButton;
