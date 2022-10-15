import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colours } from '../styles/global';
import ShotsInput from './ShotsInput';

const ScoreInput = ({ setPoints, t1Shots, t1Total, t2Shots, t2Total, end, editable }) => {
    return (
        <View style={styles.row}>
            <ShotsInput team='1' shots={t1Shots} setPoints={setPoints} editable={editable} />

            <TextInput editable={false} style={styles.scoreInput} keyboardType='numeric' value={t1Total.toString()} />

            <Text style={styles.endLabel}>{end + 1}</Text>

            <ShotsInput team='2' shots={t2Shots} setPoints={setPoints} editable={editable} />

            <TextInput editable={false} style={styles.scoreInput} keyboardType='numeric' value={t2Total.toString()} />
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

export default ScoreInput;
