import React from 'react';
import {pushNotifications} from './src/services/Index';
import AppContainer from './src/services/AppContainer';

pushNotifications.configure();

const App = () => <AppContainer />;

export default App;
