import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { useGameContext } from '../context/GameContext';
import { screen } from '../styles/global';

const DEFAULT_SETTINGS = {
    competition: '',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    rink: '',
    team1: '',
    team2: '',
};

const Create = ({ navigation }) => {
    const [gameInfo, setGameInfo] = useState(DEFAULT_SETTINGS);
    const { createGame, games } = useGameContext();

    useEffect(() => {
        setGameInfo(DEFAULT_SETTINGS);
    }, [games]);

    const updateGameInfo = (key, value) => {
        setGameInfo(prev => {
            return { ...prev, [key]: value };
        });
    };

    const handleCreateGame = () => {
        for (let key of Object.keys(gameInfo)) {
            if (!gameInfo[key]) return alert(`Please provide a ${key}`);
        }
        const { team1, team2, ...rest } = gameInfo;
        createGame(
            {
                ...rest,
                team1: { name: team1, players: [] },
                team2: { name: team2, players: [] },
            },
            () => {
                navigation.push('PlayerForm');
            }
        );
    };

    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                <FormInput label='Competition' onChange={text => updateGameInfo('competition', text)} defaultValue={gameInfo.competition} />
                <FormInput label='Rink No' onChange={text => updateGameInfo('rink', text)} keyboardType='numeric' defaultValue={gameInfo.rink} />
                <FormInput label='Date' onChange={null} disabled={false} defaultValue={gameInfo.date} />
                <FormInput label='Team One Name' onChange={text => updateGameInfo('team1', text)} defaultValue={gameInfo.team1} />
                <FormInput label='Team Two Name' onChange={text => updateGameInfo('team2', text)} defaultValue={gameInfo.team2} />
                <CustomButton label='Create Game' onPress={handleCreateGame} />
            </View>
        </ScrollView>
    );
};

export default Create;
