import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SelectGoalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Goal</Text>
      <Button title="Flexibility" onPress={() => navigation.navigate('Home')} />
      <Button title="Strength" onPress={() => navigation.navigate('Home')} />
      <Button title="Mindfulness" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});

