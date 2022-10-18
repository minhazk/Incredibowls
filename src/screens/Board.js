import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScoreRow from '../components/ScoreRow';
import { colours, screen } from '../styles/global';
import { getLongDate } from '../utils/DateFormatter';

const Board = () => {
    const [points, setPoints] = useState([
        {
            team1Shot: 0,
            team2Shot: 0,
        },
    ]);

    const dummyBoard = {
        id: 1,
        competition: 'Competition Name',
        date: new Date(),
        rink: 3,
        teamOne: {
            name: 'Team One',
            players: ['Team One 1', 'Team One 2', 'Team One 3', 'Team One 4', 'Team One 5'],
            score: 20,
        },
        teamTwo: {
            name: 'Team Two',
            players: ['Team Two 1', 'Team Two 2', 'Team Two 3', 'Team Two 4', 'Team Two 5'],
            score: 22,
        },
    }; // going to be coming from context

    return (
        <View style={screen.page}>
            <View style={styles.infoContainer}>
                <View style={styles.row}>
                    <Text style={styles.label}>Competition</Text>
                    <Text style={styles.data}>{dummyBoard.competition}</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Date</Text>
                        <Text style={styles.data}>{getLongDate(dummyBoard.rink)}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Rink</Text>
                        <Text style={styles.data}>{dummyBoard.rink}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.teamOneName}>{dummyBoard.teamOne.name}</Text>
                    <Text style={styles.playerCount}>vs</Text>
                    <Text style={styles.teamTwoName}>{dummyBoard.teamTwo.name}</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <View>
                    {dummyBoard.teamOne.players.map((player, i) => {
                        return (
                            <View style={styles.row} key={i}>
                                <Text style={styles.teamOneName}>{player}</Text>
                                <Text style={styles.playerCount}>{i + 1}</Text>
                                <Text style={styles.teamTwoName}>{dummyBoard.teamTwo.players[i]}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.row}>
                    <Text style={styles.scoreLabel}>SHOTS</Text>
                    <Text style={styles.scoreLabel}>TOTAL</Text>
                    <Text style={styles.scoreLabel}>END</Text>
                    <Text style={styles.scoreLabel}>SHOTS</Text>
                    <Text style={styles.scoreLabel}>TOTAL</Text>
                </View>
                <View style={styles.scoresWrapper}>
                    {points.map((end, i) => {
                        return <ScoreRow points={points} setPoints={setPoints} {...end} end={i} key={i} />;
                    })}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
    },
    label: {
        color: colours.primary,
        fontSize: 13,
        marginRight: 10,
        fontWeight: 'bold',
    },
    data: {
        fontWeight: 'bold',
        marginRight: 20,
    },
    teamOneName: {
        color: colours.teamOne,
        flex: 1,
        fontWeight: 'bold',
    },
    teamTwoName: {
        color: colours.teamTwo,
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    playerCount: {
        fontWeight: 'bold',
    },
    scoreLabel: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    scoresWrapper: {
        marginTop: 10,
    },
});

export default Board;
