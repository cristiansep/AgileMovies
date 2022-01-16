import React from 'react'
import { Box, VStack, Text } from 'native-base'
import { Image, StyleSheet } from 'react-native'
import { IMAGE_BASE } from '../constants'

export const ActorsCard = ({actor}) => {
    return (
        <Box
        height={100}
        width={120}
        marginX={1}
        >
        <Image
          source={{
            uri: `${IMAGE_BASE}${actor.profile_path}`,
          }}
          style={styles.image}
          />  
           <Text fontSize={10} >
          {actor.name}
        </Text>
        </Box>
    )
}


const styles = StyleSheet.create({
    image: {
        flex:1,
        borderRadius: 18,
    }
})
