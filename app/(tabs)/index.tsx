import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { palette, typography } from '../../design-system/palette';

import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Crea l’evento perfetto in pochi minuti.</Text>
      <TouchableOpacity style={styles.cta} onPress={() => router.push('/event-type')}>
        <Text style={styles.ctaText}>Inizia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    ...typography.headline,
    color: palette.primary,
    marginBottom: 32,
    textAlign: 'center',
  },
  cta: {
    backgroundColor: palette.primary,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 48,
    shadowColor: palette.shadow,
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});
