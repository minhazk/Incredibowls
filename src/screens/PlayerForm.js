import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { useGameContext } from '../context/GameContext';
import { screen } from '../styles/global';

const MAX_TEAM_SIZE = 4;

const PlayerForm = ({ route }) => {
    const { teamOne, teamTwo, ...info } = route.params;
    const [players, setPlayers] = useState({
        teamOnePlayers: [],
        teamTwoPlayers: [],
    });
    const { createGame } = useGameContext();

    const handleTeamOneInput = (key, value) => {
        setPlayers(prev => {
            prev.teamOnePlayers[key] = value;
            return prev;
        });
    };

    const handleTeamTwoInput = (key, value) => {
        setPlayers(prev => {
            prev.teamTwoPlayers[key] = value;
            return prev;
        });
    };

    const handleCreateGame = () => {
        const newGame = {
            id: 8761,
            ...info,
            date: new Date(),
            teamOne: {
                name: teamOne,
                players: players.teamOnePlayers,
                scores: [0],
            },
            teamTwo: {
                name: teamTwo,
                players: players.teamTwoPlayers,
                scores: [0],
            },
        };

        createGame(newGame);
    };

    return (
        <ScrollView>
            <View style={screen.page}>
                <View>
                    <Text style={styles.teamHeader}>Team 1: {teamOne}</Text>
                    {Array.from({ length: MAX_TEAM_SIZE }).map((x, i) => {
                        return <FormInput onChange={handleTeamOneInput} objectKey={i} label={`Player ${i + 1}`} key={i} />;
                    })}
                    <Text style={styles.teamHeader}>Team 2: {teamTwo}</Text>
                    {Array.from({ length: MAX_TEAM_SIZE }).map((x, i) => {
                        return <FormInput onChange={handleTeamTwoInput} objectKey={i} label={`Player ${i + 1}`} key={i} />;
                    })}
                    <CustomButton label='Create Team' onPress={handleCreateGame} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    teamHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
});

export default PlayerForm;
