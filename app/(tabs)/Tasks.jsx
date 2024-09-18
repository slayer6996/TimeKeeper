import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../(header)/Header'

const Tasks = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Text>Tasks</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Tasks