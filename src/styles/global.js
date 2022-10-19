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
        paddingTop: 0,
    },
    topGap: {
        marginTop: 15,
    },
});

export { colours, screen };
