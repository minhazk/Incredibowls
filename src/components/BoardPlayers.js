import React from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { colours } from '../styles/global';

const BoardPlayers = ({ team1Players, team2Players }) => {
    const { updatePlayer } = useGameContext();

    return (
        <View style={styles.infoContainer}>
            {team1Players.map((player, i) => {
                return (
                    <View style={styles.row} key={i}>
                        <TextInput defaultValue={player} onChangeText={text => updatePlayer('1', i, text)} style={styles.playerInput} />
                        <Text style={styles.playerCount}>{i + 1}</Text>
                        <TextInput defaultValue={team2Players[i]} onChangeText={text => updatePlayer('2', i, text)} style={{ ...styles.playerInput, ...styles.team2Player }} />
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
        color: colours.team1,
        flex: 1,
        borderWidth: 1,
        borderColor: colours.lightGray,
        borderRadius: 2.5,
        paddingVertical: Platform.OS === 'ios' ? 6 : 2,
        paddingHorizontal: 7,
        fontSize: Platform.OS === 'ios' ? 19 : 15,
        textAlign: 'center',
    },
    team2Player: {
        color: colours.team2,
    },
    playerCount: {
        marginHorizontal: Platform.OS === 'ios' ? 15 : 10,
        fontSize: Platform.OS === 'ios' ? 16 : 15,
    },
});

export default BoardPlayers;
