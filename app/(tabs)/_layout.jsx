import { Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'

const TabsLayout = () => {
    return (
        <>
            <Tabs
                tabBar={props => <TabBar {...props} />}
            >
                <Tabs.Screen name="Home" options={{
                    title: "Home",
                    headerShown: false
                }} />
                <Tabs.Screen name="Tasks" options={{
                    title: "Tasks",
                    headerShown: false
                }} />
                <Tabs.Screen name="Reminder" options={{
                    title: "Reminder",
                    headerShown: false
                }} />
                <Tabs.Screen name="Profile" options={{
                    title: "Profile",
                    headerShown: false
                }} />
            </Tabs>
        </>
    )
}

export default TabsLayout