import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Veritayoga 🧘‍♀️</Text>
      <Text style={styles.subtitle}>Spiritual + Modern Yoga at your fingertips.</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('SelectGoal')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2e8b57', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20 },
});

