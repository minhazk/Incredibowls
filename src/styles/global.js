import { StyleSheet } from 'react-native';

const colours = {
    primary: '#553E97',
    secondary: '#fff',
    teamOne: '#5F92F5',
    teamTwo: '#FF7575',
    danger: '#EA5656',
    accent: '#423077',
    lightGray: '#A5A0A0',
    mediumGray: '#737373',
    darkGray: '#505050',
};

const screen = StyleSheet.create({
    page: {
        backgroundColor: colours.primary,
        flex: 1,
        padding: 20,
        paddingBottom: 0,
    },
});

const defaultButtonStyles = {
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
};

export { colours, screen, defaultButtonStyles };
