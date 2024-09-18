import { Button, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState, useEffect } from "react";

const AddTask = () => {
  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState(null)

  useEffect(() => {
    console.log(date);

  }, [date])

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <ScrollView>
      <View>
        <TextInput value={taskName} className='m-2 h-10 px-4 text-xl' onChangeText={setTaskName} placeholder={"Add Task Name"} placeholderTextColor={'gray'} />
        <View className='border border-gray-300' />
        
      </View>
      <View>
        <Text className='text-xl m-4 text-gray-500'>To-do on</Text>
        <View style={styles.container}>
          <Text className="mx-4 text-lg">Any day</Text>
          <Switch className="mx-4" />
        </View>
        <View >
          <Pressable className="bg-black-100 border border-gray-100" style={styles.container} >
            <Text className="mx-4 my-2 text-lg">Mondays</Text>
            <Text>Check</Text>
          </Pressable>
          <Pressable className="bg-black-100 border border-gray-100" style={styles.container} >
            <Text className="mx-4 my-2 text-lg">Tuesdays</Text>
            <Text>Check</Text>
          </Pressable>
          <Pressable className="bg-black-100 border border-gray-100" style={styles.container} >
            <Text className="mx-4 my-2 text-lg">Wednesdays</Text>
            <Text>Check</Text>
          </Pressable>
          <Pressable className="bg-black-100 border border-gray-100" style={styles.container} >
            <Text className="mx-4 my-2 text-lg">Thursdays</Text>
            <Text>Check</Text>
          </Pressable>
          <Pressable className="bg-black-100 border border-gray-100" style={styles.container} >
            <Text className="mx-4 my-2 text-lg">Fridays</Text>
            <Text>Check</Text>
          </Pressable>
          <Pressable className="bg-black-100 border border-gray-100" style={styles.container} >
            <Text className="mx-4 my-2 text-lg">Saturdays</Text>
            <Text>Check</Text>
          </Pressable>
          <Pressable className="bg-black-100 border border-gray-100" style={styles.container} >
            <Text className="mx-4 my-2 text-lg">Sundays</Text>
            <Text>Check</Text>
          </Pressable>
        </View>
        <View className='border border-gray-300 my-4' />
      </View>
      <DateTimePicker
          value={date}
          mode={"time"}
          is24Hour={true}
          onChange={onChange}
        />
    </ScrollView>

  )
}

export default AddTask

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  }
})
