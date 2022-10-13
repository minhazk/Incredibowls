import { View, Text, FlatList } from 'react-native';
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
                score: 20,
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 22,
            },
        },
        {
            id: 2,
            competition: 'Competition',
            date: new Date(),
            rink: 1,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 18,
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 21,
            },
        },
        {
            id: 23,
            competition: 'Competition',
            date: new Date(),
            rink: 1,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 18,
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 21,
            },
        },
        {
            id: 24,
            competition: 'Competition',
            date: new Date(),
            rink: 1,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 18,
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 21,
            },
        },
        {
            id: 25,
            competition: 'Competition',
            date: new Date(),
            rink: 1,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 18,
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 21,
            },
        },
        {
            id: 26,
            competition: 'Competition',
            date: new Date(),
            rink: 1,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 18,
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 21,
            },
        },
        {
            id: 27,
            competition: 'Competition',
            date: new Date(),
            rink: 1,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 18,
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 21,
            },
        },
        {
            id: 28,
            competition: 'Competition',
            date: new Date(),
            rink: 1,
            teamOne: {
                name: 'Team One',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 18,
            },
            teamTwo: {
                name: 'Team Two',
                players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
                score: 21,
            },
        },
    ];

    return (
        <View style={screen.page}>
            <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({ item }) => <GameCard {...item} navigation={navigation} />} />
        </View>
    );
};

export default Home;
