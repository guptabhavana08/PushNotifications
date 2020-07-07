import React from 'react';
import {Text, View, Button} from 'react-native';
import {pushNotifications} from './Index';

const AppContainer = () => {
  const handleOnPress = () => {
    console.log('handleOnPress: ');
    pushNotifications.localNotification();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Press the button to see push Notification</Text>
      <Button title={'Press Me'} onPress={handleOnPress} />
    </View>
  );
};

export default AppContainer;
