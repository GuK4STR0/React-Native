import React from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';
import CalcularIdade from './src/CalcularIdade';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Text style={styles.title}>Calculadora de idade</Text>
      <CalcularIdade/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
