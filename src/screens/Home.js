import { View, ScrollView, Text, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';
import { useGameContext } from '../context/GameContext';
import { screen } from '../styles/global';

const Home = ({ navigation }) => {
    const { games } = useGameContext();

    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                {games.length === 0 ? (
                    <View style={styles.messageContainer}>
                        <Text style={styles.warningMessage}>No previously played games</Text>
                        <Text style={styles.warningMessage}>Create a game to view or edit</Text>
                    </View>
                ) : (
                    games.map((game, i) => {
                        return <GameCard {...game} navigation={navigation} key={game.id} />;
                    })
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        marginVertical: 30,
    },
    warningMessage: {
        color: 'white',
        fontSize: 17,
        marginVertical: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Home;
