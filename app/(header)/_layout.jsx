import { Stack } from 'expo-router'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="Header"  />
            <Stack.Screen name="Calendar" options={{title: 'Calendar'}} />
            <Stack.Screen name="AddTask" options={{title: 'Add Task'}}  />
        </Stack>
    )
}

export default _layout
