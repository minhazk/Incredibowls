import React from 'react';
import { Pressable, Text } from 'react-native';
import { defaultButtonStyles } from '../styles/global';

const CustomButton = ({ onPress, label, style }) => {
    return (
        <Pressable style={{ ...defaultButtonStyles.pressable, ...style }} onPress={onPress}>
            <Text style={defaultButtonStyles.label}>{label}</Text>
        </Pressable>
    );
};

export default CustomButton;
