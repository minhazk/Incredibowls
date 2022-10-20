import { StyleSheet, TextInput } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { colours } from '../styles/global';

const ShotsInput = ({ team, shot, end }) => {
    const { updatePoint } = useGameContext();

    const handleUpdatePoint = point => {
        updatePoint(end, team, point);
    };

    const handleInput = e => {
        const value = e.nativeEvent.text;
        if (!value) return;
        handleUpdatePoint(value);
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
