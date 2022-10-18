import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colours } from '../styles/global';

const ShotsInput = ({ team, shot, points, setPoints, end }) => {
    const [value, setValue] = useState(shot);

    const handleInput = () => {
        if (!value) return;
        setPoints(prev => {
            prev[end][`team${team}Shot`] = Number(value);
            prev[end][`team${team === 1 ? '2' : '1'}Shot`] = 0;
            return end === points.length - 1 ? [...prev, { team1Shot: 0, team2Shot: 0 }] : [...prev];
        });
    };

    return <TextInput value={value} onChangeText={setValue} onEndEditing={handleInput} style={styles.scoreInput} keyboardType='numeric' placeholder='0' />;
};

const styles = StyleSheet.create({
    scoreInput: {
        flex: 1,
        borderWidth: 0.25,
        borderColor: colours.lightGray,
        padding: 3,
        textAlign: 'center',
        color: colours.accent,
    },
});

export default ShotsInput;
