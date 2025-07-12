import React, { createContext, useState } from 'react';

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goal, setGoal] = useState('');

  return (
    <GoalContext.Provider value={{ goal, setGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

