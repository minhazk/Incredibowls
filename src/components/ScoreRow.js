import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { colours } from '../styles/global';
import ShotsInput from './ShotsInput';

const ScoreRow = ({ end, team1Shot, team2Shot }) => {
    const { getCurrentGame } = useGameContext();
    const { points } = getCurrentGame();

    return (
        <View style={styles.row}>
            <ShotsInput team={1} end={end} shot={team1Shot} />

            <TextInput
                editable={false}
                style={styles.scoreInput}
                keyboardType='numeric'
                defaultValue={points
                    .slice(0, end + 1)
                    .reduce((prev, curr) => Number(curr.team1Shot) + prev, 0)
                    .toString()}
            />

            <Text style={styles.endLabel}>{end + 1}</Text>

            <ShotsInput team={2} end={end} shot={team2Shot} />

            <TextInput
                editable={false}
                style={styles.scoreInput}
                keyboardType='numeric'
                defaultValue={points
                    .slice(0, end + 1)
                    .reduce((prev, curr) => Number(curr.team2Shot) + prev, 0)
                    .toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scoreInput: {
        flex: 1,
        borderWidth: 0.25,
        borderColor: colours.lightGray,
        padding: 3,
        textAlign: 'center',
        color: colours.accent,
    },
    endLabel: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default ScoreRow;
