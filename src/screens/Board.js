import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ScoreRow from '../components/ScoreRow';
import { colours, screen } from '../styles/global';
import { getLongDate } from '../utils/DateFormatter';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Board = () => {
    const [points, setPoints] = useState([
        {
            team1Shot: 7,
            team2Shot: 0,
        },
        {
            team1Shot: 10,
            team2Shot: 0,
        },
        {
            team1Shot: 3,
            team2Shot: 0,
        },
        {
            team1Shot: 0,
            team2Shot: 5,
        },
        {
            team1Shot: 0,
            team2Shot: 4,
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

    const getScoreArrays = () => {
        return {
            team1Scores: points.map(point => point.team1Shot),
            team2Scores: points.map(point => point.team2Shot),
        };
    };

    const getGameData = () => {
        return {
            id: 1,
            // competition: game.com
        };
    };

    return (
        <SafeAreaView style={screen.page}>
            <KeyboardAwareScrollView>
                <View style={{ ...styles.infoContainer, ...screen.topGap }}>
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
                <View style={styles.infoContainer}>
                    <View style={styles.totalsContainer}>
                        <Text style={styles.totalCount}>Total: {points.reduce((prev, curr) => curr.team1Shot + prev, 0)}</Text>
                        <Text style={styles.totalCount}>Total: {points.reduce((prev, curr) => curr.team2Shot + prev, 0)}</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
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
    totalsContainer: {
        flexDirection: 'row',
    },
    totalCount: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    page: {
        height: '100%',
    },
});

export default Board;
