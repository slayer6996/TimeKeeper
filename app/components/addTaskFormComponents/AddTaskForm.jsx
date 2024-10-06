import { View, Text, TextInput, ScrollView } from 'react-native'
import { useContext, useState } from 'react'
import DaySelector from './DaySelector';
import TimeSelector from './TimeSelector';
import AddTaskFormHeader from './AddTaskFormHeader';
import TaskTags from './TaskTags';
import { TaskFormContext } from '../../../context/TaskFormContextProvider';

const AddTaskForm = () => {
  const formContext = useContext(TaskFormContext);
  const [taskName, setTaskName] = useState(formContext.taskForm.taskName);
  const [notes, setNotes] = useState(formContext.taskForm.notes);

  const handleTaskNameChange = (e) => {
    setTaskName(e);
    formContext.dispatch({
      type: 'UPDATE_TASK_FORM',
      payload: { taskName: e }
    });
  };

  const handleNotesChange = (e) => {
    setNotes(e);
    formContext.dispatch({
      type: 'UPDATE_TASK_FORM',
      payload: { notes: e }
    });
  };
  
  return (
    <ScrollView className="bg-white" automaticallyAdjustKeyboardInsets={true}>
      <AddTaskFormHeader />
      <View>
        <TextInput value={taskName || ""} className='mx-2 mb-2 h-10 px-4 text-xl' onChangeText={handleTaskNameChange} placeholder={"Task Name"} placeholderTextColor={'gray'} />
        <View className='border border-gray-300' />
      </View>
      <View>
        <Text className='text-lg mx-4 mt-4 mb-2 text-gray-500'>To-do on</Text>
        <DaySelector />
        <View className='border border-gray-300 mb-2' />
        <TimeSelector />
      </View>
      <View className='border border-gray-300' />
      <TextInput
        multiline={true}
        numberOfLines={8}
        placeholder={"Task notes"}
        placeholderTextColor={'gray'}
        className='my-2 mx-4 p-2 text-base'
        value={notes || ""}
        onChangeText={handleNotesChange}
      />
      <View className='border border-gray-300' />
      <TaskTags />
    </ScrollView>
  )
}

export default AddTaskForm
