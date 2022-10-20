import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { useGameContext } from '../context/GameContext';
import { screen } from '../styles/global';
import uuid from 'react-native-uuid';

const Create = ({ navigation }) => {
    const [gameInfo, setGameInfo] = useState({});
    const { createGame, setCurrentGameID } = useGameContext();

    const updateGameInfo = (key, value) => {
        setGameInfo(prev => {
            return { ...prev, [key]: value };
        });
    };

    const handleCreateGame = () => {
        const required = ['competition', 'date', 'rink', 'teamOne', 'teamTwo'];
        for (let entry of required) {
            if (!gameInfo[entry]) return alert(`Please provide a ${entry}`);
        }
        const { competition, date, rink, teamOne, teamTwo } = gameInfo;
        createGame({
            competition,
            date,
            rink,
            teamOne: { name: teamOne, players: [], scores: [0] },
            teamTwo: { name: teamTwo, players: [], scores: [0] },
        });
        navigation.push('PlayerForm');
    };

    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                <FormInput label='Competition' onChange={updateGameInfo} objectKey='competition' />
                <FormInput label='Date' onChange={updateGameInfo} objectKey='date' />
                <FormInput label='Rink No' onChange={updateGameInfo} objectKey='rink' keyboardType='numeric' />
                <FormInput label='Team One Name' onChange={updateGameInfo} objectKey='teamOne' />
                <FormInput label='Team Two Name' onChange={updateGameInfo} objectKey='teamTwo' />
                <CustomButton label='Create Game' onPress={handleCreateGame} />
            </View>
        </ScrollView>
    );
};

export default Create;
