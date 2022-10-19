import { View, FlatList, ScrollView } from 'react-native';
import GameCard from '../components/GameCard';
import { screen } from '../styles/global';

const Home = ({ navigation }) => {
    const dummyData = [
        {
            id: 1,
            competition: 'Competition',
            date: new Date(),
            rink: 3,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                scores: [2, 3, 4, 5],
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                scores: [3, 4, 5, 6],
            },
        },
        {
            id: 2,
            competition: 'Competition',
            date: new Date(),
            rink: 3,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                scores: [2, 3, 4, 5],
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                scores: [3, 4, 5, 6],
            },
        },
    ];

    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                {dummyData.map((game, i) => {
                    return <GameCard {...game} navigation={navigation} key={i} />;
                })}
            </View>
        </ScrollView>
    );
};

export default Home;
