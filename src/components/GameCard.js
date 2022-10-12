import { StyleSheet, Text, View } from 'react-native';
import { colours } from '../styles/global';
import { getShortDate } from '../utils/DateFormatter';

const GameCard = ({ competition, date, rink, teamOne, teamTwo }) => {
    return (
        <View style={styles.gameCardContainer}>
            <View style={styles.teamsContainer}>
                <Text style={styles.teamOneLabel}>{teamOne.name}</Text>
                <View style={styles.scoresContainer}>
                    <Text style={styles.score}>
                        {teamOne.score} - {teamTwo.score}
                    </Text>
                    <Text style={styles.date}>{getShortDate(date)}</Text>
                </View>
                <Text style={styles.teamTwoLabel}>{teamTwo.name}</Text>
            </View>
            <Text style={styles.competition}>{competition}</Text>
            <Text style={styles.rink}>{rink}</Text>
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
        display: 'flex',
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
});

export default GameCard;
