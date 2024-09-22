import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const TaskFormHeader = () => {
  return (
    <View style={styles.header}>
        <Pressable>
          <Text className="text-primary-70">Cancel</Text>
        </Pressable>
        <Text className="text-gray-500 text-lg font-medium">Add Task</Text>
        <Pressable>
          <Text className="text-primary-100">Save</Text>
        </Pressable>
      </View>
  )
}

export default TaskFormHeader

const styles = StyleSheet.create({
    header: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
        justifyContent: 'space-between'
    }
})