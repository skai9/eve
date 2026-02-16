import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { palette, typography } from '../design-system/palette';

import { useRouter } from 'expo-router';

export default function LocationScreen() {
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [children, setChildren] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Location esterna</Text>
      <TextInput style={styles.input} placeholder="Indirizzo" value={address} onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder="Data" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Numero bambini" value={children} onChangeText={setChildren} keyboardType="numeric" />
      <Button title="Continua" onPress={() => router.push('/extra')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  headline: {
    ...typography.headline,
    color: palette.primary,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    shadowColor: palette.shadow,
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
});