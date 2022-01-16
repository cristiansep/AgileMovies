import React from 'react'
import { Box } from 'native-base';
import { Dimensions, FlatList } from 'react-native';
import { Loading } from './Loading'
import { MoviePoster } from './MoviePoster'

const {width} = Dimensions.get('window');
const itemWidth = (width) / 4;

export const MovieList = ({movie, morePopular}) => {
    return (
        <FlatList
        data={movie}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={itemWidth} height={120} mh={8} mt={3} />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={morePopular}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
            <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            >
                <Loading size={30} color="black" />
          
            </Box>
        }
      />
    )
}
