import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import { GoalProvider } from './app/context/GoalContext';

export default function App() {
  return (
    <GoalProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GoalProvider>
  );
}
