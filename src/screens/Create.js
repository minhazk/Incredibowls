import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { screen } from '../styles/global';

const Create = () => {
    return (
        <View style={screen.page}>
            <FormInput label='Competition' />
            <FormInput label='Date' />
            <FormInput label='Rink No' keyboardType='numeric' />
            <FormInput label='Game Size' keyboardType='numeric' />
            <CustomButton label='Create Team' style={styles.submitBtn} />
        </View>
    );
};

const styles = StyleSheet.create({
    submitBtn: {
        marginTop: 10,
    },
});

export default Create;
