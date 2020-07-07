import React, {useEffect} from 'react';
import {pushNotifications} from './src/services/Index';
import AppContainer from './src/services/AppContainer';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

pushNotifications.configure();

const App = () => {
  useEffect(() => {
    PushNotificationIOS.requestPermissions().then(
      data => {
        console.log('PushNotificationIOS.requestPermissions', data);
      },
      data => {
        console.log('PushNotificationIOS.requestPermissions failed', data);
      },
    );
  }, []);
  return <AppContainer />;
};

export default App;
