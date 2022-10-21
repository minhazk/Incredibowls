import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useGameContext } from '../context/GameContext';
import { colours, screen } from '../styles/global';
import { getLongDate } from '../utils/DateFormatter';

const BoardGameInfo = ({ competition, date, rink, team1, team2 }) => {
    const { updateGameInfo, updateTeamName } = useGameContext();

    return (
        <View style={{ ...styles.infoContainer, ...screen.topGap }}>
            <View style={styles.row}>
                <Text style={styles.label}>Competition</Text>
                <TextInput value={competition} onChangeText={text => updateGameInfo('competition', text)} style={styles.input} />
            </View>
            <View style={styles.row}>
                <View style={styles.row}>
                    <Text style={styles.label}>Date</Text>
                    <TextInput value={getLongDate(date)} onChangeText={text => updateGameInfo('date', text)} style={styles.input} />
                </View>
                <View style={styles.row}>
                    <Text style={{ ...styles.label, ...styles.rinkLabel }}>Rink</Text>
                    <TextInput value={rink.toString()} onChangeText={text => updateGameInfo('rink', text)} style={styles.input} />
                </View>
            </View>
            <View style={styles.row}>
                <TextInput value={team1.name} onChangeText={text => updateTeamName('1', text)} style={styles.teamName} />
                <Text style={styles.vs}>vs</Text>
                <TextInput value={team2.name} onChangeText={text => updateTeamName('2', text)} style={{ ...styles.teamName, ...styles.team2Name }} />
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
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 2.5,
        flex: 1,
    },
    teamName: {
        color: colours.team1,
        flex: 1,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: colours.lightGray,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 2.5,
        textAlign: 'center',
    },
    team2Name: {
        color: colours.team2,
        // textAlign: 'right',
    },
    vs: {
        // fontWeight: 'bold',
        marginHorizontal: 7,
    },
});

export default BoardGameInfo;
