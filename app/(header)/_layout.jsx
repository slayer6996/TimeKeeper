import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import Header from './Header'
import AddTask from './AddTask'
import Calendar from './Calendar'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="Header"  />
            <Stack.Screen name="AddTask" options={{headerShown: false}}  />
            <Stack.Screen name="Calendar" options={{headerShown: false}} />
        </Stack>
    )
}

export default _layout

const styles = StyleSheet.create({})