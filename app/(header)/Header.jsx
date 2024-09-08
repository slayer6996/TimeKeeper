import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Header = () => {
  return (
    <View>
      <Text>Good day!</Text>
      <Button title='+' onPress={() => router.push('/AddTask')} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})