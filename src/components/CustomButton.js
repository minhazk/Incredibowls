import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
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
        padding: 5,
        color: colours.secondary,
        backgroundColor: colours.accent,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    label: {
        color: colours.secondary,
        fontWeight: 'bold',
        fontSize: 12,
    },
});

export default CustomButton;
