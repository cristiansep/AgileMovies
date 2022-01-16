import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_BASE } from '../constants';

export const MoviePoster = ({movie, base, width=300, height=420, mh=0, mt=0 }) => {


    const navigation = useNavigation();


    return (
        <TouchableOpacity
        activeOpacity={0.90}
        onPress={() => navigation.navigate("Detail", movie)}
        >
        <View style={{
            width,
            height,
            marginHorizontal: mh,
            marginVertical: mt
        }}
        >
        <View style={styles.imageContainer}>
          <Image
            source={{
                uri: `${IMAGE_BASE}${movie.backdrop_path}`,
              }}
          style={styles.image}
          />  
                
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        borderRadius: 18,
    },
    imageContainer: {
        flex:1,
        borderRadius: 18,
        shadowColor: "@000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})
