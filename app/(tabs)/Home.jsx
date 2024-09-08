import { View, Text } from 'react-native'
import React from 'react'
import Header from '../(header)/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
    <View>
      <Header />
      <Text>Home</Text>
    </View>
    </SafeAreaView>
  )
}

export default Home