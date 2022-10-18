import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colours } from '../styles/global';
import ShotsInput from './ShotsInput';

const ScoreRow = ({ points, setPoints, team1Shot, team2Shot, end }) => {
    const [team1Total, setTeam1Total] = useState(0);
    const [team2Total, setTeam2Total] = useState(0);

    const handleTotal = () => {
        setTeam1Total(points.slice(0, end).reduce((prev, curr) => curr.team1Shot + prev, 0));
        setTeam2Total(points.slice(0, end).reduce((prev, curr) => curr.team2Shot + prev, 0));
        return { team1Total, team2Total };
    };

    useEffect(() => {
        handleTotal();
    }, [points]);

    useEffect(() => {
        handleTotal();
    }, []);

    return (
        <View style={styles.row}>
            <ShotsInput team='1' end={end} shot={points[end].team1Shot} points={points} setPoints={setPoints} />

            <TextInput editable={false} style={styles.scoreInput} keyboardType='numeric' value={team1Total.toString()} />

            <Text style={styles.endLabel}>{end + 1}</Text>

            <ShotsInput team='2' end={end} shot={points[end].team2Shot} points={points} setPoints={setPoints} />

            <TextInput editable={false} style={styles.scoreInput} keyboardType='numeric' value={team2Total.toString()} />
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
