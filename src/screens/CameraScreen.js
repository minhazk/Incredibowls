import React, { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colours } from '../styles/global';
import { useGameContext } from '../context/GameContext';

const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const { addImage } = useGameContext();

    const getPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    useEffect(() => {
        getPermission();
    }, []);

    let camera;

    const takePicture = async () => {
        if (!camera) return;
        const { uri } = await camera.takePictureAsync();
        addImage(uri);
        navigation.pop();
    };

    if (!hasPermission) {
        return <Text>Camera permission is required to take pictures</Text>;
    } else
        return (
            <Camera ref={ref => (camera = ref)} style={styles.cameraContainer}>
                <Pressable onPress={takePicture} style={styles.takePicBtn}>
                    <Ionicons name='camera-outline' size={30} color={colours.primary} />
                </Pressable>
            </Camera>
        );
};

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column-reverse',
    },
    takePicBtn: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 50,
    },
});

export default CameraScreen;
