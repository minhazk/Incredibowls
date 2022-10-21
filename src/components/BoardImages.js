import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const BoardImages = ({ images }) => {
    return (
        <View style={styles.imageContainer}>
            {images.map((uri, i) => {
                return <Image source={{ uri }} style={styles.image} key={i} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    image: {
        minWidth: 75,
        maxWidth: 75,
        flex: 1,
        height: 70,
        margin: 5,
        borderRadius: 2.5,
    },
});

export default BoardImages;
