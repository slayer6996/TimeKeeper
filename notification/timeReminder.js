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
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Time's Ticking",
            body: '',
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2 }
    });
}

export async function scheduleTaskNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Time's Ticking",
            body: '',
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2, repeats: true },
    });
}

export async function cancelNotification(identifier) {
    await Notifications.cancelScheduledNotificationAsync(identifier);
}
