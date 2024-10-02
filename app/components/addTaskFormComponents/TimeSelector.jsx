import { StyleSheet, Text, View, Switch } from 'react-native'
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from 'react'

const TimeSelector = ({ selectedTaskTime }) => {
    const [taskTime, setTaskTime] = useState(selectedTaskTime ? selectedTaskTime : {
        timeAt: null,
        timeFrom: null,
        timeTo: null
    });

    const [isAnyTime, setIsAnyTime] = useState(true);
    const [isTimeRange, setIsTimeRange] = useState(false);

    useEffect(() => {
        setTaskTime({
            timeAt: (!isAnyTime && !isTimeRange) ? time : null,
            timeFrom: (!isAnyTime && isTimeRange) ? timeFrom : null,
            timeTo: (!isAnyTime && isTimeRange) ? timeTo : null
        });
    }, [isAnyTime, isTimeRange]);

    useEffect(() => {
        //update time at form level
    }, [taskTime])

    const [time, setTime] = useState(new Date());
    const [timeFrom, setTimeFrom] = useState(new Date());
    const [timeTo, setTimeTo] = useState(new Date());

    const onTimeChange = (e, selectedTime) => {
        setTime(selectedTime);
        setTaskTime({...taskTime, timeAt : selectedTime});
    }

    const onTimeFromChange = (e, selectedTimeFrom) => {
        setTimeFrom(selectedTimeFrom);
        setTaskTime({...taskTime, timeFrom : selectedTimeFrom});
    }

    const onTimeToChange = (e, selectedTimeTo) => {
        setTimeTo(selectedTimeTo);
        setTaskTime({...taskTime, timeTo : selectedTimeTo});
    }

    const toggleIsAnyTime = () => {
        setIsAnyTime(prev => !prev);
    }

    const toggleIsTimeRange = () => {
        setIsTimeRange(prev => !prev);
    }

    return (
        <View>
            <View style={styles.container} className="mb-2">
                <Text className="mx-4 text-base">Any Time</Text>
                <Switch className="mx-4" value={isAnyTime} onChange={toggleIsAnyTime} />
            </View>
            {
                !isAnyTime && (
                    <View>
                        <View style={styles.container}>
                            <Text className="mx-4 text-base">Time range</Text>
                            <Switch className="mx-4" value={isTimeRange} onChange={toggleIsTimeRange} />
                        </View>
                        {
                            !isTimeRange && (
                                <View className="my-2 mx-4">
                                    <DateTimePicker
                                        value={time}
                                        mode={"time"}
                                        is24Hour={true}
                                        onChange={onTimeChange}
                                    />
                                </View>
                            )
                        }

                        {
                            isTimeRange && (
                                <View className="mr-4">
                                    <View style={styles.container} className="my-2">
                                        <Text className="mx-4 text-base text-gray-700">From</Text>
                                        <DateTimePicker
                                            value={timeFrom}
                                            mode={"time"}
                                            is24Hour={true}
                                            onChange={onTimeFromChange}
                                        />
                                    </View>
                                    <View style={styles.container} className='mb-2'>
                                        <Text className="mx-4 text-base text-gray-700">To</Text>
                                        <DateTimePicker
                                            value={timeTo}
                                            mode={"time"}
                                            is24Hour={true}
                                            onChange={onTimeToChange}
                                        />
                                    </View>
                                </View>
                            )
                        }
                    </View>
                )
            }
        </View>
    )
}

export default TimeSelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
