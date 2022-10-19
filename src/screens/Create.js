import { StyleSheet, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { screen } from '../styles/global';

const Create = ({ navigation }) => {
    return (
        <View style={screen.page}>
            <View>
                <FormInput label='Competition' />
                <FormInput label='Date' />
                <FormInput label='Rink No' keyboardType='numeric' />
                <FormInput label='Game Size' keyboardType='numeric' />
                <CustomButton label='Create Team' onPress={() => navigation.navigate('PlayerForm')} style={styles.submitBtn} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    submitBtn: {
        marginTop: 10,
    },
});

export default Create;
