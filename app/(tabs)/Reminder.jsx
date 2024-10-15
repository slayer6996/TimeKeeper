import { View, Text, Pressable } from 'react-native'
import React, {useEffect, useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../(header)/Header'
import * as Notifications from 'expo-notifications';
import { getNotificationPermission, scheduleTimelyReminders } from '../../notification/timeReminder';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Reminder = () => {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    getNotificationPermission();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <SafeAreaView>
    <View>
      <Header />
      <Text>Reminder</Text>
      <Pressable onPress={async () => await scheduleTimelyReminders()}>
        <Text>send notification</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  )
}

export default Reminder