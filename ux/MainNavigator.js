// Navigazione principale EVE
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EventTypeScreen from './screens/EventTypeScreen';
import LocationScreen from './screens/LocationScreen';
import SalaScreen from './screens/SalaScreen';
import ExtraScreen from './screens/ExtraScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EventType" component={EventTypeScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Sala" component={SalaScreen} />
      <Stack.Screen name="Extra" component={ExtraScreen} />
    </Stack.Navigator>
  );
}
