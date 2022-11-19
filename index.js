import React from 'react';
import {AppRegistry} from 'react-native';
import WrapApp from './App';
import LandingScreen from 'src/ui/pages/landing';
import {name as appName} from './app.json';

function App() {
  return (
    <WrapApp>
      <LandingScreen />
    </WrapApp>
  );
}
AppRegistry.registerComponent(appName, () => App);
