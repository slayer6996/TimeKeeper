import { Stack } from 'expo-router'

const _layout = () => {

    return (
        <Stack>
            <Stack.Screen name="Header"  />
            <Stack.Screen name="Calendar" options={{title: 'Calendar'}} />
            <Stack.Screen name="AddTask" options={{headerShown: false}} />
        </Stack>
    )
}

export default _layout
