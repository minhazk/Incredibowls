import React, { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import { Pressable, StyleSheet, Text } from 'react-native';

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);

    const getPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    useEffect(() => {
        getPermission();
    }, []);

    if (!hasPermission) {
        return <Text>Camera permission is required to take pictures</Text>;
    } else
        return (
            <Camera style={styles.cameraContainer}>
                <Pressable onPress={null}>
                    <Text>Take Picture</Text>
                </Pressable>
            </Camera>
        );
};

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
    },
});

export default CameraScreen;
