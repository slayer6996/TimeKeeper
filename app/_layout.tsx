import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SplashScreen, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="(header)" options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayout
