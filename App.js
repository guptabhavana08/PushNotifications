// import React from 'react';
// import {pushNotifications} from './src/services/Index';
// import AppContainer from './src/services/AppContainer';

// pushNotifications.configure();

// const App = () => <AppContainer />;

// export default App;

import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  DeviceEventEmitter,
} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export const App = () => {
  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    // PushNotificationIOS.addEventListener(
    //   'localNotification',
    //   onLocalNotification,
    // );

    PushNotificationIOS.requestPermissions().then(
      data => {
        console.log('PushNotificationIOS.requestPermissions', data);
      },
      data => {
        console.log('PushNotificationIOS.requestPermissions failed', data);
      },
    );

    // return () => {
    //   PushNotificationIOS.removeEventListener(
    //     'localNotification',
    //     onLocalNotification,
    //   );
    // };
  }, []);

  const sendLocalNotification = () => {
    PushNotificationIOS.presentLocalNotification({
      alertTitle: 'Sample Title',
      alertBody: 'Sample local notification',
      applicationIconBadgeNumber: 1,
    });
  };

  const scheduleLocalNotification = () => {
    PushNotificationIOS.scheduleLocalNotification({
      alertBody: 'Test Local Notification',
      fireDate: new Date().toISOString(),
    });
  };

  const onLocalNotification = notification => {
    Alert.alert(
      'Local Notification Received',
      'Alert message: ' + notification.getMessage(),
      [
        {
          text: 'Dismiss',
          onPress: null,
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={'white'}
        style={styles.button}
        onPress={sendLocalNotification}>
        <Text style={styles.buttonLabel}>Fake local Notification</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={'white'}
        style={styles.button}
        onPress={scheduleLocalNotification}>
        <Text style={styles.buttonLabel}>Scheduled</Text>
      </TouchableHighlight>

      {/* <Button
        onPress={() => PushNotificationIOS.setApplicationIconBadgeNumber(42)}
        label="Set app's icon badge to 42"
      />
      <Button
        onPress={() => PushNotificationIOS.setApplicationIconBadgeNumber(0)}
        label="Clear app's icon badge"
      />
      <View>
        <Button onPress={showPermissions} label="Show enabled permissions" />
        <Text>{JSON.stringify(permissions)}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: 'blue',
  },
});
