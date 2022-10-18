import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colours } from '../styles/global';

const ShotsInput = ({ team, shots, setPoints, editable }) => {
    const [value, setValue] = useState(shots);

    return (
        <TextInput
            value={value}
            onChangeText={setValue}
            onEndEditing={() => {
                if (!value) return;
                setPoints(prev => {
                    const prevScore = prev[prev.length - 1];
                    prev[prev.length - 1] = {
                        ...prevScore,
                        [`t${team}Points`]: value,
                        [`t${team}Total`]: prevScore[`t${team}Total`] + Number(value),
                    };
                    return [
                        ...prev,
                        {
                            t1Points: 0,
                            t1Total: prev[prev.length - 1].t1Total,
                            t2Points: 0,
                            t2Total: prev[prev.length - 1].t2Total,
                        },
                    ];
                });
            }}
            editable={editable}
            style={styles.scoreInput}
            keyboardType='numeric'
            placeholder='0'
        />
    );
};

const styles = StyleSheet.create({
    scoreInput: {
        flex: 1,
        borderWidth: 0.25,
        borderColor: colours.lightGray,
        padding: 3,
        textAlign: 'center',
        color: colours.accent,
    },
});

export default ShotsInput;
