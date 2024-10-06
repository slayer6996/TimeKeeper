import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useContext } from 'react'
import { TaskFormContext } from '../../../context/TaskFormContextProvider';
import { useNavigation } from '@react-navigation/native';
import { createNewTask } from '../../../db/tasks';

const AddTaskFormHeader = () => {
  const navigation = useNavigation();
  const formContext = useContext(TaskFormContext);

  const saveTask = (task) => {
    createNewTask(task);
  };

  const handleSave = () => {
    if(formContext.taskForm.taskName === "" || formContext.taskForm.taskName===null) {
      Alert.alert('Incomplete details', 'Task name is required to create task.');
    } else{
      saveTask(formContext.taskForm);
      navigation.goBack();
    }
  };

  const handleClear = () => {
    Alert.alert('Discard changes', 'Any changes will be deleted.', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'Discard', onPress: clearForm},
    ]);
  };

  const clearForm = () => {
    formContext.dispatch({
      type: "UPDATE_TASK_FORM",
      payload: {
        taskName: null,
        time: {
            timeAt: null,
            timeFrom: null,
            timeTo: null
        },
        days: [],
        notes: null,
        taskTag: null
      }
    });
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
        <Pressable onPress={handleClear}>
          <Text className="text-primary-70">Cancel</Text>
        </Pressable>
        <Text className="text-gray-500 text-lg font-medium">Add Task</Text>
        <Pressable onPress={handleSave}>
          <Text className="text-primary-100">Save</Text>
        </Pressable>
      </View>
  )
};

export default AddTaskFormHeader

const styles = StyleSheet.create({
    header: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
        justifyContent: 'space-between'
    }
})