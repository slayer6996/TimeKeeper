import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import DaySelector from '../components/addTaskFormComponents/DaySelector';
import TimeSelector from '../components/addTaskFormComponents/TimeSelector';
import TaskFormHeader from '../components/addTaskFormComponents/TaskFormHeader';
import TaskTags from '../components/addTaskFormComponents/TaskTags';

const AddTask = () => {
  const [taskName, setTaskName] = useState(null);
  const [notes, setNotes] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e);
  }

  const handleNotesChange = (e) => {
    setNotes(e);
  }

  return (
    <ScrollView className="bg-white" automaticallyAdjustKeyboardInsets={true}>
      <TaskFormHeader />
      <View>
        <TextInput value={taskName} className='m-2 h-10 px-4 text-xl' onChangeText={handleTaskNameChange} placeholder={"Task Name"} placeholderTextColor={'gray'} />
        <View className='border border-gray-300' />
      </View>
      <View>
        <Text className='text-lg mx-4 mt-4 mb-2 text-gray-500'>To-do on</Text>
          <DaySelector />
        <View className='border border-gray-300 mb-2' />
        <TimeSelector />
      </View>
      <View className='border border-gray-300 mt-2' />
        <TextInput
          multiline={true}
          numberOfLines={8}
          placeholder={"Task notes"} 
          placeholderTextColor={'gray'}
          className='my-2 mx-4 p-2 text-base'
          value={notes}
          onChangeText={handleNotesChange}
        />
        <View className='border border-gray-300' />
        <TaskTags />
    </ScrollView>

  )
};

export default AddTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
