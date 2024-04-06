import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Cast({cast, navigation}) {

    const personName = 'Akshay Kumar';
    const characterName = 'Viru';
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5"> Top Cast</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            cast && cast.map((person, index) => {
                return (
                    <TouchableOpacity
                    key={index}
                    className="mr-4 items-center"
                    onPress={() => navigation.navigate('Person', person)}
                    >
                        <View className="rounded-full h-20 w-20 border border-neutral-500 overflow-hidden items-center">
                            <Image
                             source={require('../assets/avengers5.png')}
                             className="h-24 w-20 rounded-2xl"
                             />
                        </View>

                        <Text className="text-white text-xs mt-1">
                            {characterName.length>10? characterName.slice(0,10)+'...' : characterName}
                        </Text>
                        <Text className="text-neutral-400 text-xs mt-1">
                           { personName.length>10? personName.slice(0,10)+'...' : personName}
                        </Text>

                    </TouchableOpacity>
                )
            })
        }

      </ScrollView>
    </View>
  )
}