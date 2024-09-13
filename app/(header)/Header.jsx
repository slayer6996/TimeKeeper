import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { icons } from '../../assets/icons'

const Header = () => {
  return (

    <View style={styles.header}>
      <Pressable>
        {icons.add()}
      </Pressable>
      <View style={styles.icons}>
        <Pressable>
          {icons.calendar()}
        </Pressable>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    margin: 24
  },
  icons: {
    marginRight: 25
  }
})