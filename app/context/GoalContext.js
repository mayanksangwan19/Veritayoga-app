// app/context/GoalContext.js
import React, { createContext, useState, useContext } from 'react';

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  return (
    <GoalContext.Provider value={{ selectedGoal, setSelectedGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoal = () => useContext(GoalContext);
