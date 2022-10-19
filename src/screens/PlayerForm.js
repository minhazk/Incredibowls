import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { screen } from '../styles/global';

const PlayerForm = () => {
    return (
        <ScrollView>
            <View style={screen.page}>
                <View>
                    <Text style={styles.teamHeader}>Team 1</Text>
                    {Array.from({ length: 4 }).map((x, i) => {
                        return <FormInput label={`Player ${i + 1}`} key={i} />;
                    })}
                    <Text style={styles.teamHeader}>Team 2</Text>
                    {Array.from({ length: 4 }).map((x, i) => {
                        return <FormInput label={`Player ${i + 1}`} key={i} />;
                    })}
                    <CustomButton label='Create Team' onPress={() => navigation.push('Create')} />
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
