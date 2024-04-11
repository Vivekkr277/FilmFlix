import { View, Text, Platform, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import {styles} from '../theme/'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading'
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb'

const ios = Platform.OS == 'ios';

export default function HomeScreen() {

 const [trending, setTrending] = useState([]);
 const [upcoming, setUpcoming] = useState([]);
 const [topRated, setTopRated] = useState([]);
 const [loading, setLoading] = useState(false);

 const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies(),
    getUpComingMovies(),
    getTopRatedMovies()
  },[])

   const getTrendingMovies= async () => {
    const data = await fetchTrendingMovies();
    // console.log('trending movie data : ', data);
    
      if(data && data.results)   setTrending(data.results);
      setLoading(false);

   }
   


  const getUpComingMovies  = async () => {
    const data = await fetchUpcomingMovies();
    
     if(data && data.results) setUpcoming(data.results);
  }

  const getTopRatedMovies  = async () => {
    const data = await fetchTopRatedMovies();
    // console.log('got toprated movies : ', data);

    if(data && data.results)  setTopRated(data.results);
  }

  

  return (
    <View className="flex-1 bg-neutral-800 	">
      <SafeAreaView className={ios ? "-mt-2" : "mb-3"} >
        {/* search bar and logo */}
       <StatusBar style='light'/>

       <View className="flex-row justify-between items-center mx-4">
         <Bars3CenterLeftIcon size={30} strokeWidth={2} color={'white'}/>
         <Text className="text-3xl font-bold text-white">
            <Text style={styles.text}>M</Text>ovies
         </Text>
         <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={'white'}/>
         </TouchableOpacity>
        

       </View>

      </SafeAreaView>

      {
        loading ?
        (<Loading/>) :
       ( <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom : 10}}
        >
          {/* trending movies carousel */}
         {trending.length>0 && <TrendingMovies data={trending}/> }   
     
  
          {/* upcoming movies row */}
          <MovieList title="Upcoming" data={upcoming}/>
  
          {/* toprated movies */}
          <MovieList title="Top Rated" data={topRated}/>
        </ScrollView>)

      }

     
    </View>
  )
}