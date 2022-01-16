import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { MoviePoster } from '../components/MoviePoster';
import { getMoreNewMovies, getMorePopular, getNewMovies, getPopularMovies, movieLoadingMore } from '../state/actions/movieActions';
import { LoadingScreen } from '../screens/LoadingScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from 'native-base';
import { Title } from '../components/Title';
import { Loading } from '../components/Loading';
import { HeaderTile } from '../components/HeaderTile';
import { MovieList } from '../components/MovieList';



const {width} = Dimensions.get('window');

export const HomeScreen = () => {

   const { newMovies, imageBase, popularMovies, movieLoading} = useSelector(state => state.movie);
   const { user } = useSelector(state => state.auth);
   const dispatch = useDispatch();
   const {top} = useSafeAreaInsets();

   const [page, setPage] = useState(2)
   const [pagePopular, setPagePopular] = useState(2)
  

    useEffect(() => {
      dispatch(getNewMovies())
    }, [])

    useEffect(() => {
        dispatch(getPopularMovies())
      }, [])

    const renderItem = useCallback(
        ({item}) => <MoviePoster movie={item} base={imageBase} />,[])
        
    const keyExtractor = useCallback((item) => item.id.toString(),[]);

    if(newMovies === null || popularMovies === null) return <LoadingScreen />


    const moreMovies = () => {
       setPage(page + 1)
       dispatch(movieLoadingMore())
       dispatch(getMoreNewMovies(page))
    }

    const morePopular = () => {
        setPagePopular(pagePopular + 1)
        dispatch(movieLoadingMore())
        dispatch(getMorePopular(pagePopular))
     }


    return (
        <ScrollView>
        <Box style={{marginTop: top + 20}} >
            <Box alignSelf="flex-end" >
            <HeaderTile text={`${user.firstName} ${user.lastName}`}/>
            </Box>
            <Title text="Películas en estreno" />



            <Box flex={1}  justifyContent="center" alignItems="center">
                {movieLoading &&
                      <Loading position='absolute' color="white" />
                    }
                <Carousel
                data={newMovies}
                renderItem={renderItem}
                sliderWidth={width}
                keyExtractor={keyExtractor}
                itemWidth={300}
                onEndReached={moreMovies}
                onEndReachedThreshold={0.2}
                ListFooterComponent={
                    <Box
                    flex={1}
                    px={5}
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Loading size={50} color="black" />
                  
                    </Box>
                }
                />
            </Box>

            <Box mt={3} >
            <Title text="Películas mas populares" />
          
          <MovieList
          movie={popularMovies}
          morePopular={morePopular}
          />
            </Box>
        </Box>
 </ScrollView>
    )
}
