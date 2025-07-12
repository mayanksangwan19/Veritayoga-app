import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import yogaPlans from '../data/yogaPlans';
import YogaPoseCard from '../components/YogaPoseCard';
import { GoalContext } from '../context/GoalContext';

const YogaPlanScreen = () => {
  const { goal } = useContext(GoalContext);
  const plan = yogaPlans[goal.toLowerCase()] || [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your {goal} Plan</Text>
      {plan.map((pose, index) => (
        <YogaPoseCard
          key={index}
          pose={pose.pose}
          duration={pose.duration}
          instruction={pose.instruction}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2e8b57',
  },
});

export default YogaPlanScreen;
