import { StyleSheet, Text, Pressable, View, Switch } from 'react-native'
import { icons } from '../../../assets/icons';
import { useContext, useState } from 'react'
import { TaskFormContext } from '../../../context/TaskFormContextProvider';

const DaySelector = () => {
    const formContext = useContext(TaskFormContext);
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [isAnyDay, setIsAnyDay] = useState(formContext.taskForm.days.length == 7);
    const [daysSelection, setDaysSelection] = useState(formContext.taskForm.days);

    const toggleAnyDay = () => {
        if(!isAnyDay) {
            formContext.dispatch({
                type: "UPDATE_TASK_FORM",
                payload: { days: weekdays }
            });
        } else {
            formContext.dispatch({
                type: "UPDATE_TASK_FORM",
                payload: { days: [] }
            });
            setDaysSelection([]);
        }
        setIsAnyDay(prevState => !prevState);
    };

    const handleSelect = (selection) => {
        if (daysSelection.includes(selection)) {
            const selectedDays = daysSelection.filter(day => day !== selection);
            formContext.dispatch({
                type: "UPDATE_TASK_FORM",
                payload: {days: selectedDays}
            });
            setDaysSelection(selectedDays);
        } else {
            const selectedDays = [...daysSelection, selection];
            formContext.dispatch({
                type: "UPDATE_TASK_FORM",
                payload: {days: selectedDays}
            });
            setDaysSelection(selectedDays);
        }
    }

    return (
        <View>
            <View style={styles.container} className="mb-2">
                <Text className="mx-4 text-base">Any day</Text>
                <Switch className="mx-4" value={isAnyDay} onChange={toggleAnyDay} />
            </View>
            {
                !isAnyDay &&
                <View>
                    <View className='border border-gray-300' />
                    {weekdays.map((day) => (
                        <Pressable key={day} className="px-4 py-3" style={daysSelection.includes(day) ? styles.selected : styles.container} onPress={() => handleSelect(day)} >
                            <Text className="text text-gray-700">Every {day}</Text>
                            {daysSelection.includes(day) && icons.check()}
                        </Pressable>
                    ))}
                </View>

            }
        </View>
    )
}

export default DaySelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    selected : {
        backgroundColor: '#F1F1F1',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
