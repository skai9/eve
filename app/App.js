// Entry point principale per EVE
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../ux/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
