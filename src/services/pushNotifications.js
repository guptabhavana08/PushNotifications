import PushNotification from 'react-native-push-notification';
import {PushNotificationIOS} from 'react-native';

const configure = () => {
  PushNotification.configure({
    onRegister: function(token) {
      //process token
    },

    onNotification: function(notification) {
      // process the notification
      // required on iOS only
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,
    requestPermissions: false,
  });
};

const localNotification = () => {
  PushNotification.localNotificationSchedule({
    date: new Date(Date.now() + 60 * 1000),
    autoCancel: true,
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_notification',
    color: 'green',
    vibrate: true,
    vibration: 300,
    title: 'Devie',
    message: 'Hey there is a message from devie !',
    playSound: true,
    soundName: 'default',
    actions: '["Accept", "Reject"]',
    repeatType: 'minute',
  });
};

export {configure, localNotification};
