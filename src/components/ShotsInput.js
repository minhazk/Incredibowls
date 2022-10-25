import { Platform, StyleSheet, TextInput } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { colours } from '../styles/global';

const ShotsInput = ({ team, end }) => {
    const { getCurrentShot, updatePoint, getCurrentGame } = useGameContext();

    const handleUpdatePoint = point => {
        updatePoint(end, team, point);
    };

    const handleInput = e => {
        const value = e.nativeEvent.text;
        if (!value) return;
        handleUpdatePoint(value);
    };

    return (
        <TextInput
            defaultValue={getCurrentShot(team, end).toString()}
            onEndEditing={handleInput}
            style={{ ...styles.scoreInput, color: end !== getCurrentGame().points.length - 1 && getCurrentShot(1, end) === 0 && getCurrentShot(2, end) === 0 ? 'red' : 'black' }}
            keyboardType='numeric'
            placeholder='0'
        />
    );
};

const styles = StyleSheet.create({
    scoreInput: {
        flex: 1,
        borderWidth: 0.25,
        fontSize: Platform.OS === 'ios' ? 18 : 15,
        borderColor: colours.lightGray,
        padding: Platform.OS === 'ios' ? 7 : 5,
        textAlign: 'center',
        color: colours.accent,
    },
});

export default ShotsInput;
