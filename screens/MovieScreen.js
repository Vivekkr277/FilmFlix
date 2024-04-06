import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid'
import { styles , theme} from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import Loading from '../components/loading';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios? '' : 'mt-3';

export default function MovieScreen() {

    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [isFavourite, toogleFavourite] = useState(false);
    let movieName = 'Avengers and the whole world';
    const [cast, setCast] = useState([1,2,3,4,5]);
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // api call
    }, [item])
  return (
      <ScrollView
       contentContainerStyle={{paddingBottom: 20}}
       className="flex-1 bg-neutral-900	 "
      >
        {/* back button and movie poster */}
        <View className="w-full">
            <SafeAreaView className={" absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}>
                <TouchableOpacity style={styles.background} className="rounded-xl p-1" 
                onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size='28' strokeWidth={2.5} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toogleFavourite(!isFavourite)}>
                    <HeartIcon size='35'   color={isFavourite? theme.background: 'white'}/>
                </TouchableOpacity>

            </SafeAreaView>

            {
                loading ? (
                    <Loading/>
                ) : (
                    <View>
                        <Image
                        source={require('../assets/avengers4.png')} 
                        style={{width : width, height: height*0.55}}
                        />
                        <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23, 1)']}
                        style={{width: width, height: height*0.40}}
                        start={{x: 0.5, y : 0}}
                        end={{x :0.5, y:1}}
                        className="absolute bottom-0"
                        />
                   </View>
                )
            }
           
        </View>

        {/* movie details */}
        <View style={{marginTop:-( height*0.09)}} className="space-y-3">
            {/* title */}
            <Text className="text-center text-white font-bold text-3xl tracking-wider">
                {movieName}
            </Text>
            {/* status release runtime */}
            <Text className="text-neutral-400 font-semibold text-center text-base">
                Released • 2020 • 170min
            </Text>

            {/* genres */}
             <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-center text-base" >
                    Action •
                </Text>
                <Text className="text-neutral-400 font-semibold text-center text-base" >
                    Thrill •
                </Text>
                <Text className="text-neutral-400 font-semibold text-center text-base" >
                    Comedy 
                </Text>
             </View>
             {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wider">
                 Before even starting to tell your story, it is always important to begin with a premise. This will set your readers’ expectations and allow them to better picture out the story you’re about to tell. Log lines should only contain one to two sentences as possible with a hint of irony if at all possible.
                </Text>
        </View>
        {/* cast */}
        <Cast  navigation={navigation} cast={cast}/>
        {/* similar movies */}
        <MovieList title='Similar Movies' hideSeeAll={true} data={similarMovies}/>
      </ScrollView>
  )
}