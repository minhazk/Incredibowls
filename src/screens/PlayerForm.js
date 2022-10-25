import { StackActions } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { useGameContext } from '../context/GameContext';
import { screen } from '../styles/global';

const MAX_TEAM_SIZE = 4;

const PlayerForm = ({ navigation }) => {
    const { getCurrentGame, updatePlayer } = useGameContext();
    const { team1, team2 } = getCurrentGame();

    return (
        <ScrollView>
            <View style={screen.page}>
                <View>
                    <Text style={styles.teamHeader}>Team 1: {team1.name}</Text>
                    {Array.from({ length: MAX_TEAM_SIZE }).map((_x, i) => {
                        return <FormInput onChange={text => updatePlayer('1', i, text)} objectKey={i} label={`Player ${i + 1}`} key={i} />;
                    })}
                    <Text style={styles.teamHeader}>Team 2: {team2.name}</Text>
                    {Array.from({ length: MAX_TEAM_SIZE }).map((_x, i) => {
                        return <FormInput onChange={text => updatePlayer('2', i, text)} objectKey={i} label={`Player ${i + 1}`} key={i} />;
                    })}
                    <CustomButton
                        label='Create Team'
                        onPress={() => {
                            if (team1.players.length !== team2.players.length || !team1.players.length || !team2.players.length)
                                return window.alert('Both teams must have at least one player and an equal number of players on each side');
                            navigation.dispatch(StackActions.pop(1));
                            navigation.navigate('Board');
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    teamHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 20,
    },
});

export default PlayerForm;
