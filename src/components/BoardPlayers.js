import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colours } from '../styles/global';

const BoardPlayers = ({ teamOnePlayers, teamTwoPlayers }) => {
    return (
        <View style={styles.infoContainer}>
            {teamOnePlayers.map((player, i) => {
                return (
                    <View style={styles.row} key={i}>
                        <TextInput defaultValue={player} style={styles.playerInput} />
                        <Text style={styles.playerCount}>{i + 1}</Text>
                        <TextInput defaultValue={teamTwoPlayers[i]} style={{ ...styles.playerInput, ...styles.teamTwoPlayer }} />
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
    playerInput: {
        color: colours.teamOne,
        flex: 1,
        borderWidth: 1,
        borderColor: colours.lightGray,
        borderRadius: 2.5,
        paddingVertical: 3,
        paddingHorizontal: 7,
        fontSize: 13,
        textAlign: 'center',
    },
    teamTwoPlayer: {
        color: colours.teamTwo,
    },
    playerCount: {
        marginHorizontal: 10,
        fontSize: 13,
    },
});

export default BoardPlayers;
