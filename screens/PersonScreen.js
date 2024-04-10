import { View, Text, ScrollView, TouchableOpacity, Platform, Dimensions , Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'

const ios = Platform.OS == 'ios'
const verticalMargin = ios? "": 'my-3'
const {width, height} = Dimensions.get('window')

export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavourite, toogleFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1,2,3,4,5]);
    const [loading, setLoading] = useState(false);
  return (
    <ScrollView className="flex-1 bg-neutral-900 " contentContainerStyle={{marginBottom :20}}>
      {/* back button */}
      <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4"+verticalMargin}>
                <TouchableOpacity style={styles.background} className="rounded-xl p-1" 
                onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size='28' strokeWidth={2.5} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toogleFavourite(!isFavourite)}>
                    <HeartIcon size='35'   color={isFavourite? 'red': 'white'}/>
                </TouchableOpacity>

         </SafeAreaView>
         {/* person details */}
         {
            loading ? (
                <Loading/>
            ) : (
                <View>
                <View className="flex-row justify-center"
                 style={{
                    shadowColor: 'gray',
                    shadowRadius: 40,
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 1
                 }}
                >
                    <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                        <Image source={require('../assets/avengers3.png')}
                        style={{height: height*0.42, width: width*0.74}}/>
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-white text-3xl font-bold text-center">
                            akshay kumar
                    </Text>
                    <Text className="text-neutral-500 text-base text-center">
                            Mumbai, Maharashtra
                    </Text>
                </View>
                <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                    <View className="px-2 border-r border-r-neutral-400 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">Gender</Text>
                    </View>
                    <View className="px-2 border-r border-r-neutral-400 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">1984-03-18</Text>
                    </View>
                    <View className="px-2 border-r border-r-neutral-400 items-center">
                        <Text className="text-white font-semibold">Known for</Text>
                        <Text className="text-neutral-300 text-sm">Acting</Text>
                    </View>
                    <View className="px-2  items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">65.32</Text>
                    </View>
                </View>
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                     Before even starting to tell your story, it is always important to begin with a premise. This will set your readers’ expectations and allow them to better picture out the story you’re about to tell. Log lines should only contain one to two sentences as possible with a hint of irony if at all possible.
                    </Text>
                </View>
                {/*person movies  */}
                <MovieList title={'Person Movies'} hideSeeAll={true} data={personMovies}/>
             </View>
            )
         }
    
    </ScrollView>
  )
}