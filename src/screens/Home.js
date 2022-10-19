import { View, ScrollView } from 'react-native';
import GameCard from '../components/GameCard';
import { useGameContext } from '../context/GameContext';
import { screen } from '../styles/global';

const Home = ({ navigation }) => {
    const { games } = useGameContext();

    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                {games.map((game, i) => {
                    return <GameCard {...game} navigation={navigation} key={i} />;
                })}
            </View>
        </ScrollView>
    );
};

export default Home;
