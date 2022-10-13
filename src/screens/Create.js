import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputBox from '../components/InputBox';
import { screen } from '../styles/global';

const Create = () => {
    return (
        <View style={screen.page}>
            <InputBox label='Competition' />
            <InputBox label='Date' />
            <InputBox label='Rink No' keyboardType='numeric' />
            <InputBox label='Game Size' keyboardType='numeric' />
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
