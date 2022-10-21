import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colours, screen } from '../styles/global';
import { getLongDate } from '../utils/DateFormatter';

const BoardGameInfo = ({ competition, date, rink, teamOne, teamTwo }) => {
    return (
        <View style={{ ...styles.infoContainer, ...screen.topGap }}>
            <View style={styles.row}>
                <Text style={styles.label}>Competition</Text>
                <TextInput defaultValue={competition} style={styles.input} />
            </View>
            <View style={styles.row}>
                <View style={styles.row}>
                    <Text style={styles.label}>Date</Text>
                    <TextInput defaultValue={getLongDate(date)} style={styles.input} />
                </View>
                <View style={styles.row}>
                    <Text style={{ ...styles.label, ...styles.rinkLabel }}>Rink</Text>
                    <TextInput defaultValue={rink.toString()} style={styles.input} />
                </View>
            </View>
            <View style={styles.row}>
                <TextInput defaultValue={teamOne.name} style={styles.teamName} />
                <Text style={styles.vs}>vs</Text>
                <TextInput defaultValue={teamTwo.name} style={{ ...styles.teamName, ...styles.teamTwoName }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
        flex: 1,
    },
    label: {
        color: colours.primary,
        fontSize: 15,
        marginRight: 10,
        fontWeight: 'bold',
    },
    rinkLabel: {
        marginLeft: 15,
    },
    input: {
        fontSize: 15,
        borderWidth: 1,
        borderColor: colours.lightGray,
        color: colours.mediumGray,
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 2.5,
        flex: 1,
    },
    teamName: {
        color: colours.teamOne,
        flex: 1,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: colours.lightGray,
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 2.5,
        textAlign: 'center',
    },
    teamTwoName: {
        color: colours.teamTwo,
        // textAlign: 'right',
    },
    vs: {
        // fontWeight: 'bold',
        marginHorizontal: 7,
    },
});

export default BoardGameInfo;
