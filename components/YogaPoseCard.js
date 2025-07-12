import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YogaPoseCard = ({ pose, duration, instruction }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.pose}>{pose}</Text>
      <Text style={styles.duration}>{duration}</Text>
      <Text style={styles.instruction}>{instruction}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  pose: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e8b57',
  },
  duration: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  instruction: {
    fontSize: 14,
    color: '#666',
  },
});

export default YogaPoseCard;

