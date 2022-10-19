import { ScrollView, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { screen } from '../styles/global';

const Create = ({ navigation }) => {
    return (
        <ScrollView style={screen.page}>
            <View style={screen.topGap}>
                <FormInput label='Competition' />
                <FormInput label='Date' />
                <FormInput label='Rink No' keyboardType='numeric' />
                <FormInput label='Game Size' keyboardType='numeric' />
                <CustomButton label='Create Game' onPress={() => navigation.push('PlayerForm')} />
            </View>
        </ScrollView>
    );
};

export default Create;
