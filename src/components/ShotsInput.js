import { StyleSheet, TextInput } from 'react-native';
import { colours } from '../styles/global';

const ShotsInput = ({ team, shot, setPoints, end }) => {
    const handleInput = e => {
        const value = e.nativeEvent.text;
        if (!value) return;
        // if (Number(value) < 0) return;
        setPoints(prev => {
            prev[end][`team${team}Shot`] = Number(value);
            prev[end][`team${team === 1 ? '2' : '1'}Shot`] = 0;
            return end === prev.length - 1 ? [...prev, { team1Shot: 0, team2Shot: 0 }] : [...prev];
        });
    };

    return <TextInput defaultValue={shot.toString()} onEndEditing={handleInput} style={styles.scoreInput} keyboardType='numeric' placeholder='0' />;
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
