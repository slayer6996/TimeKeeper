import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../(header)/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchAllTasks } from '../../db/tasks'
import * as SQLite from 'expo-sqlite/legacy'

const Home = () => {
  const db = SQLite.openDatabase('timekeeper.db');

  const getTasks = () => {
    fetchAllTasks(tasks => {
      console.log(tasks)
    });
  };

  useEffect(() => {
    getTasks();
  },[]);

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
