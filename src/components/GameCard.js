import { StyleSheet, Text, View, Platform } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { colours, defaultButtonStyles } from '../styles/global';
import { getShortDate } from '../utils/DateFormatter';
import CustomButton from './CustomButton';

const GameCard = ({ navigation, id, competition, date, rink, team1, team2 }) => {
    const { currentGameID, setCurrentGameID, getFinalScore, deleteGame } = useGameContext();
    const { team1Score, team2Score } = getFinalScore(id);

    const handleEdit = () => {
        setCurrentGameID(id);
        navigation.navigate('Board');
    };

    const handleDelete = () => {
        if (currentGameID === id) setCurrentGameID(null);
        deleteGame(id);
    };

    return (
        <View style={styles.gameCardContainer}>
            <View style={styles.teamsContainer}>
                <Text style={styles.team1Label}>{team1.name}</Text>
                <View style={styles.scoresContainer}>
                    <Text style={styles.score}>
                        {team1Score} - {team2Score}
                    </Text>
                    <Text style={styles.date}>{getShortDate(date)}</Text>
                </View>
                <Text style={styles.team2Label}>{team2.name}</Text>
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
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        padding: Platform.OS === 'ios' ? 20 : 10,
    },
    teamsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    team1Label: {
        color: colours.team1,
        fontWeight: 'bold',
        fontSize: Platform.OS === 'ios' ? 18 : 15,
    },
    team2Label: {
        color: colours.team2,
        fontWeight: 'bold',
        fontSize: Platform.OS === 'ios' ? 18 : 15,
    },
    scoresContainer: {
        marginLeft: 25,
        marginRight: 25,
    },
    score: {
        fontWeight: 'bold',
        fontSize: Platform.OS === 'ios' ? 20 : 17,
        color: colours.accent,
        textAlign: 'center',
    },
    date: {
        color: colours.mediumGray,
        fontWeight: 'bold',
        fontSize: Platform.OS === 'ios' ? 15 : 13,
        marginTop: 2,
        textAlign: 'center',
    },
    competition: {
        textAlign: 'center',
        fontSize: Platform.OS === 'ios' ? 15 : 13,
        fontWeight: 'bold',
        color: colours.mediumGray,
        margin: 5,
    },
    rink: {
        textAlign: 'center',
        fontSize: 12,
        color: colours.lightGray,
        fontSize: Platform.OS === 'ios' ? 17 : 13,
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
