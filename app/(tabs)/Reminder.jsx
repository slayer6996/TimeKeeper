import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../(header)/Header'

const Reminder = () => {
  return (
    <SafeAreaView>
    <View>
      <Header />
      <Text>Reminder</Text>
    </View>
    </SafeAreaView>
  )
}

export default Reminder