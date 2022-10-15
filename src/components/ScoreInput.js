import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colours } from '../styles/global';

const ScoreInput = ({ setPoints, t1Shots, t1Total, t2Shots, t2Total, end, editable }) => {
    return (
        <View style={styles.row}>
            <TextInput
                onEndEditing={t =>
                    setPoints(prev => [
                        ...prev,
                        {
                            t1Shots: 0,
                            t1Total: 1,
                            t2Shots: 0,
                            t2Total: 0,
                        },
                    ])
                }
                editable={editable}
                style={styles.scoreInput}
                keyboardType='numeric'
                value={t1Shots?.toString()}
                placeholder='0'
            />
            <TextInput editable={false} style={styles.scoreInput} keyboardType='numeric' value={t1Total.toString()} onChangeText={() => null} />
            <Text style={styles.endLabel}>{end + 1}</Text>
            <TextInput
                onEndEditing={t =>
                    setPoints(prev => [
                        ...prev,
                        {
                            t1Shots: 0,
                            t1Total: 1,
                            t2Shots: 0,
                            t2Total: 0,
                        },
                    ])
                }
                editable={editable}
                style={styles.scoreInput}
                keyboardType='numeric'
                value={t2Shots?.toString()}
                placeholder='0'
            />
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
