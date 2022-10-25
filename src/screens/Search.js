import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import GameCard from '../components/GameCard';
import { useGameContext } from '../context/GameContext';
import { screen } from '../styles/global';

const Search = ({ navigation }) => {
    const [input, setInput] = useState(null);
    const { games } = useGameContext();

    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                <TextInput value={input} onChangeText={setInput} style={styles.searchInput} placeholder='Search here' />

                <View style={styles.gameList}>
                    {!!input &&
                        games
                            .filter(game => [...Object.values(game), ...game.team1.players, ...game.team2.players, game.team1.name, game.team2.name].some(game => game.toString().includes(input)))
                            .map(game => {
                                return <GameCard {...game} navigation={navigation} key={game.id} />;
                            })}
                </View>
            </View>
        </ScrollView>
    );
};

export default Search;

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    gameList: {
        paddingVertical: 10,
    },
});
