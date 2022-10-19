import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { screen } from '../styles/global';

const Create = ({ navigation }) => {
    const [gameInfo, setGameInfo] = useState({});

    const updateGameInfo = (key, value) => {
        setGameInfo(prev => {
            return { ...prev, [key]: value };
        });
    };

    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                <FormInput label='Competition' onChange={updateGameInfo} objectKey='competition' />
                <FormInput label='Date' onChange={updateGameInfo} objectKey='date' />
                <FormInput label='Rink No' onChange={updateGameInfo} objectKey='rink' keyboardType='numeric' />
                <FormInput label='Team One Name' onChange={updateGameInfo} objectKey='teamOne' />
                <FormInput label='Team Two Name' onChange={updateGameInfo} objectKey='teamTwo' />
                <CustomButton label='Create Game' onPress={() => navigation.push('PlayerForm', gameInfo)} />
            </View>
        </ScrollView>
    );
};

export default Create;
