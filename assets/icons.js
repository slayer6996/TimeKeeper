import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export const icons = {
    Home: (props) => <Feather name="home" size={24} {...props} />,
    Tasks: (props) => <Feather name="list" size={24} {...props} />,
    Reminder: (props) => <Entypo name="stopwatch" size={24} {...props} />,
    Profile: (props) => <Feather name="user" size={24} {...props} />,
    add: () => <AntDesign name="pluscircleo" size={32} color="#8B8CDD" />,
    calendar: () => <Feather name="calendar" size={32} color='#8B8CDD' />,
    check: () => <Feather name="check" size={18} color="gray" />
}