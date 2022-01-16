import React, { useEffect } from 'react'
import { Box, HStack, Stack, VStack } from 'native-base'
import { Dimensions, Image, StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'
import { IMAGE_BASE } from '../constants'
import { Title } from '../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { actorsClear, getActors } from '../state/actions/movieActions';
import { ActorsCard } from '../components/ActorsCard';
import { HeaderTile } from '../components/HeaderTile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';


const {width} = Dimensions.get('window');
const itemWidth = (width) / 5;

export const DetailScreen = ({route}) => {


    const movie = route.params
    const {actors} = useSelector(state => state.movie);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const {top} = useSafeAreaInsets();


    useEffect(() => {
    if(!movie) return 
     dispatch(getActors(movie.id))
     return () => dispatch(actorsClear())
    }, [])



    return (
        <ScrollView 
        contentContainerStyle={{
          marginTop: top + 20,
        }}
        showsVerticalScrollIndicator={false}
        >
        <Stack mb={10} >
        <VStack
         w="90%"
         mx="auto"
        >
         <Box alignSelf="flex-end" >
            <HeaderTile text={`${user.firstName} ${user.lastName}`}/>
            </Box>
        <Title left={0} text={movie.title}/>
        <Box
        height={300}
        >
        <Image
          source={{
            uri: `${IMAGE_BASE}${movie.poster_path}`,
          }}
          style={styles.image}
          />  

        </Box>

        <HStack mt={5} mb={5} space={3}>

        <Box
        width={150}
        mx="auto"
        height={100}
        >
        <Image
          source={{
            uri: `${IMAGE_BASE}${movie.backdrop_path}`,
          }}
          style={styles.image}
          />  

        </Box>
        <Box flex={1} >
        <Text 
        adjustsFontSizeToFit
        allowFontScaling
        >
          {movie.overview}
        </Text>
        </Box>

        </HStack>

        <Title left={0} text="Reparto"/>
        {
          actors ? (
            <FlatList
                  data={actors}
                  horizontal={true}
                  contentContainerStyle={{marginBottom:5}}
                  renderItem={({item}) => <ActorsCard actor={item}/>}
                  keyExtractor={(item) => item.id.toString()}
                  showsHorizontalScrollIndicator={false}
                />

          ): (
            <Box flex={1} justifyContent="center" alignItems="center" >
            <Loading/>
        </Box>
          )
        }
        
        </VStack>

        </Stack>

        </ScrollView>
    )
}





const styles = StyleSheet.create({
    image: {
        flex:1,
        borderRadius: 18,
    }
})

