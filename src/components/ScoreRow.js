import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { colours } from '../styles/global';
import ShotsInput from './ShotsInput';

const ScoreRow = ({ end }) => {
    const { getTotal, currentGameID } = useGameContext();

    return (
        <View style={styles.row}>
            <ShotsInput team={1} end={end} />

            <TextInput editable={false} style={styles.scoreInput} keyboardType='numeric' defaultValue={getTotal(currentGameID, end, 1)} />

            <Text style={styles.endLabel}>{end + 1}</Text>

            <ShotsInput team={2} end={end} />

            <TextInput editable={false} style={styles.scoreInput} keyboardType='numeric' defaultValue={getTotal(currentGameID, end, 2)} />
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
    },
});

export default ScoreRow;
