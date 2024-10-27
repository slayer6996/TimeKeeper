import * as Notifications from 'expo-notifications';
import { saveTaskNotificationDetails } from '../db/taskNotifications';

async function getNotificationPermission() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Timely notifications are disabled');
      return;
    }
}

export async function scheduleTaskNotification(task, taskId) {
    getNotificationPermission();
    const { taskName, time, days } = task;
    if(time.timeAt !== null || time.timeFrom !== null) {
        const taskTime = formatTime(time);
        const taskDays = formatDays(days);
        //create notification only if days are specified
        for(let day in taskDays) {
            const notificationIdentifier = await Notifications.scheduleNotificationAsync({
                content: {
                    title: `${taskName} reminder`,
                    body: `time ${taskTime}`,
                    data: { data: 'goes here' },
                },
                trigger: {
                    hour: taskTime.hour,
                    minute: taskTime.minute,
                    day: day,
                    repeats: true
                },
            });
            //save identifier
            saveTaskNotificationDetails(taskId, notificationIdentifier);
        }
    }
}

export function cancelTaskNotification(notifications) {
    notifications.forEach(async notification => {
        await Notifications.cancelScheduledNotificationAsync(notification.notification_identifier)
        .catch(error => {
            console.log(`error cancelling notification id ${notification.notification_identifier}`, error);
        })
    })
}

function formatTime(time) {
    const {timeAt, timeFrom} = time;
    const taskTime = timeAt ?? timeFrom;
    const formattedTime = taskTime.toLocaleTimeString('en-US', { hour12:false, hour:"2-digit", minute: "2-digit" });
    return {
        hour : formattedTime.slice(0,2),
        minute : formattedTime.slice(-2)
    };
}

function formatDays(days) {
    const weekdays = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    };
    const formattedDays = [];

    for(let day in days) {
        formattedDays.push(weekdays[day]);
    }

    return formattedDays;
}
