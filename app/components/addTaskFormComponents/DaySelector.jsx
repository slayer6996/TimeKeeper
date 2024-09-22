import { StyleSheet, Text, Pressable, View, Switch } from 'react-native'
import { icons } from '../../../assets/icons';
import { useState } from 'react'

const DaySelector = ({ selectedDays = [] }) => {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [isAnyDay, setIsAnyDay] = useState(false);
    const [daysSelection, setDaysSelection] = useState(selectedDays);

    const toggleAnyDay = () => {
        setIsAnyDay(prevState => !prevState);
    };

    const handleSelect = (selection) => {
        if (daysSelection.includes(selection)) {
            setDaysSelection(prevState => prevState.filter(day => day !== selection));
        } else {
            setDaysSelection(prevState => [...prevState, selection]);
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
