import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { GoalProvider } from './context/GoalContext';

export default function App() {
  return(
    <GoalProvider>
      <AppNavigator />
    </GoalProvider>
  );
}
