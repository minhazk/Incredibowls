import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { screen } from '../styles/global';

const Create = () => {
    const [step, setStep] = useState(1);

    return (
        <View style={screen.page}>
            {step === 1 ? (
                <View>
                    <FormInput label='Competition' />
                    <FormInput label='Date' />
                    <FormInput label='Rink No' keyboardType='numeric' />
                    <FormInput label='Game Size' keyboardType='numeric' />
                    <CustomButton label='Create Team' onPress={() => setStep(2)} style={styles.submitBtn} />
                </View>
            ) : step === 2 ? (
                <View>
                    <Text>Second step</Text>
                </View>
            ) : (
                setStep(1)
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    submitBtn: {
        marginTop: 10,
    },
});

export default Create;
