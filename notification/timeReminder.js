import * as Notifications from 'expo-notifications';

export async function getNotificationPermission() {
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

export async function scheduleTimelyReminders() {
    const notificationIdentifier = await Notifications.scheduleNotificationAsync({
        content: {
            title: "Time's Ticking",
            body: '',
            data: { data: 'goes here' },
        },
        trigger: { hour: 21, minute:42 }
    });
}

export async function scheduleTaskNotification() {
    const notificationIdentifier = await Notifications.scheduleNotificationAsync({
        content: {
            title: "Time's Ticking",
            body: '',
            data: { data: 'goes here' },
        },
        trigger: { hour: 21, minute:41, repeats: true },
    });
}
