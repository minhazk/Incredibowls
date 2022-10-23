import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { useGameContext } from '../context/GameContext';
import { screen } from '../styles/global';

const Create = ({ navigation }) => {
    const [gameInfo, setGameInfo] = useState({});
    const { createGame } = useGameContext();

    const updateGameInfo = (key, value) => {
        setGameInfo(prev => {
            return { ...prev, [key]: value };
        });
    };

    const handleCreateGame = () => {
        const required = ['competition', 'date', 'rink', 'team1', 'team2'];
        for (let entry of required) {
            if (!gameInfo[entry]) return alert(`Please provide a ${entry}`);
        }
        const { team1, team2, ...rest } = gameInfo;
        createGame(
            {
                ...rest,
                team1: { name: team1, players: [] },
                team2: { name: team2, players: [] },
            },
            () => navigation.push('PlayerForm')
        );
    };

    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                <FormInput label='Competition' onChange={text => updateGameInfo('competition', text)} />
                <FormInput label='Date' onChange={text => updateGameInfo('date', text)} />
                <DatePicker format='DD-MM-YYYY' minDate={new Date()} confirmBtnText='Select' cancelBtnText='Cancel' />
                <FormInput label='Rink No' onChange={text => updateGameInfo('rink', text)} keyboardType='numeric' />
                <FormInput label='Team One Name' onChange={text => updateGameInfo('team1', text)} />
                <FormInput label='Team Two Name' onChange={text => updateGameInfo('team2', text)} />
                <CustomButton label='Create Game' onPress={handleCreateGame} />
            </View>
        </ScrollView>
    );
};

export default Create;
