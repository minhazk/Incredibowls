import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colours } from '../styles/global';

const BoardPlayers = ({ teamOnePlayers, teamTwoPlayers }) => {
    return (
        <View style={styles.infoContainer}>
            {teamOnePlayers.map((player, i) => {
                return (
                    <View style={styles.row} key={i}>
                        <Text style={styles.teamOnePlayer}>{player}</Text>
                        <Text style={styles.playerCount}>{i + 1}</Text>
                        <Text style={styles.teamTwoPlayer}>{teamTwoPlayers[i]}</Text>
                    </View>
                );
            })}
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
    teamOnePlayer: {
        color: colours.teamOne,
        flex: 1,
        fontWeight: 'bold',
    },
    teamTwoPlayer: {
        color: colours.teamTwo,
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    playerCount: {
        fontWeight: 'bold',
    },
});

export default BoardPlayers;
