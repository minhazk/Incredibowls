import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colours, screen } from '../styles/global';
import { getLongDate } from '../utils/DateFormatter';

const BoardGameInfo = ({ competition, date, rink, teamOne, teamTwo }) => {
    return (
        <View style={{ ...styles.infoContainer, ...screen.topGap }}>
            <View style={styles.row}>
                <Text style={styles.label}>Competition</Text>
                <Text style={styles.data}>{competition}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.row}>
                    <Text style={styles.label}>Date</Text>
                    <Text style={styles.data}>{getLongDate(date)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Rink</Text>
                    <Text style={styles.data}>{rink}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.teamOneName}>{teamOne.name}</Text>
                <Text style={styles.playerCount}>vs</Text>
                <Text style={styles.teamTwoName}>{teamTwo.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
    },
    label: {
        color: colours.primary,
        fontSize: 13,
        marginRight: 10,
        fontWeight: 'bold',
    },
    data: {
        fontWeight: 'bold',
        marginRight: 20,
    },
    teamOneName: {
        color: colours.teamOne,
        flex: 1,
        fontWeight: 'bold',
    },
    teamTwoName: {
        color: colours.teamTwo,
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    playerCount: {
        fontWeight: 'bold',
    },
});

export default BoardGameInfo;
