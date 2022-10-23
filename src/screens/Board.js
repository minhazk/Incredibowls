import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ScoreRow from '../components/ScoreRow';
import { screen } from '../styles/global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useGameContext } from '../context/GameContext';
import CustomButton from '../components/CustomButton';
import BoardPlayers from '../components/BoardPlayers';
import GameInfo from '../components/BoardGameInfo';
import BoardImages from '../components/BoardImages';

const Board = ({ navigation }) => {
    const { currentGameID, setCurrentGameID, getCurrentGame, getTotal } = useGameContext();
    if (!currentGameID) {
        return (
            <SafeAreaView style={screen.page}>
                <Text style={styles.warningMessage}>Create or Select a game to view Scoreboard</Text>
                <CustomButton label='Create a game' onPress={() => navigation.navigate('Create')} />
                <CustomButton label='Select a game' onPress={() => navigation.navigate('Home')} />
            </SafeAreaView>
        );
    }
    const game = getCurrentGame();
    const { team1, team2, points, images } = game;
    const dummyImages = ['https://picsum.photos/500/200', 'https://picsum.photos/200/300', 'https://picsum.photos/200/400'];

    return (
        <SafeAreaView style={screen.page}>
            <KeyboardAwareScrollView>
                <GameInfo {...game} />
                <BoardPlayers team1Players={team1.players} team2Players={team2.players} />

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
                            return <ScoreRow points={points} {...end} end={i} key={i} />;
                        })}
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.totalsContainer}>
                        <Text style={styles.totalCount}>Total: {getTotal(currentGameID, points.length, 1)}</Text>
                        <Text style={styles.totalCount}>Total: {getTotal(currentGameID, points.length, 2)}</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton label='Take Picture' />
                </View>

                {!!dummyImages.length && (
                    <View style={styles.infoContainer}>
                        <BoardImages images={dummyImages} />
                    </View>
                )}

                <View style={styles.buttonContainer}>
                    <CustomButton
                        label='Finish Game'
                        onPress={() => {
                            setCurrentGameID(null);
                            navigation.navigate('Home');
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    warningMessage: {
        color: 'white',
        fontSize: 17,
        marginVertical: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
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
    buttonContainer: {
        marginBottom: 10,
    },
});

export default Board;
