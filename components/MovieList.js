import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function MovieList({title, data, hideSeeAll}) {

    let movieName = 'Avengers and the whole world';
    const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
       <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {
            !hideSeeAll && (
                <TouchableOpacity>
                   <Text style={styles.text} className="text-lg">See All</Text>
              </TouchableOpacity>
            )
        }
        
       </View>

       {/* movie row */}
       <ScrollView
        horizontal
        showsHorizontalScrollIndicator= {false}
        contentContainerStyle={{paddingHorizontal: 15}}
       >
        {
            data.map((item, index) => {
                return (
                    <TouchableWithoutFeedback
                     key={index}
                     onPress={() => navigation.push('Movie', item)}
                    >
                        <View className="space-y-1 mr-4">
                            <Image source={require('../assets/avengers3.png')}
                             style={{width: width*0.33, height: height*0.22}}
                             className="rounded-3xl"
                             />
                            <Text className="ml-1 text-neutral-400">
                                { movieName.length >14 ? movieName.slice(0,14)+ '...' : movieName }
                                </Text>
                        </View>
                       
                    </TouchableWithoutFeedback>
                )
            } )
        }

       </ScrollView>
    </View>
  )
}