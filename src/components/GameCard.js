import { StyleSheet, Text, View } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { colours, defaultButtonStyles } from '../styles/global';
import { getShortDate } from '../utils/DateFormatter';
import CustomButton from './CustomButton';

const GameCard = ({ navigation, id, competition, date, rink, teamOne, teamTwo }) => {
    const { setCurrentGameID, getFinalScore, deleteGame } = useGameContext();
    const { team1Score, team2Score } = getFinalScore(id);

    const handleEdit = () => {
        setCurrentGameID(id);
        navigation.navigate('Board');
    };

    const handleDelete = () => {
        deleteGame(id);
    };

    return (
        <View style={styles.gameCardContainer}>
            <View style={styles.teamsContainer}>
                <Text style={styles.teamOneLabel}>{teamOne.name}</Text>
                <View style={styles.scoresContainer}>
                    <Text style={styles.score}>
                        {team1Score} - {team2Score}
                    </Text>
                    <Text style={styles.date}>{getShortDate(date)}</Text>
                </View>
                <Text style={styles.teamTwoLabel}>{teamTwo.name}</Text>
            </View>
            <Text style={styles.competition}>{competition}</Text>
            <Text style={styles.rink}>Rink {rink}</Text>
            <View style={styles.buttonsContainer}>
                <CustomButton label='Delete' onPress={handleDelete} style={styles.deleteBtn} />
                <CustomButton label='Edit' onPress={handleEdit} style={styles.editBtn} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gameCardContainer: {
        backgroundColor: colours.secondary,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
    },
    teamsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    teamOneLabel: {
        color: colours.teamOne,
        fontWeight: 'bold',
    },
    teamTwoLabel: {
        color: colours.teamTwo,
        fontWeight: 'bold',
    },
    scoresContainer: {
        marginLeft: 25,
        marginRight: 25,
    },
    score: {
        fontWeight: 'bold',
        fontSize: 17,
        color: colours.accent,
        textAlign: 'center',
    },
    date: {
        color: colours.mediumGray,
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 2,
        textAlign: 'center',
    },
    competition: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: colours.mediumGray,
        margin: 5,
    },
    rink: {
        textAlign: 'center',
        fontSize: 12,
        color: colours.lightGray,
    },
    buttonsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
    },
    deleteBtn: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: colours.danger,
    },
    editBtn: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: colours.primary,
    },
});

export default GameCard;
