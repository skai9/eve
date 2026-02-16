import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { palette, typography } from '../design-system/palette';

const sale = [
  { name: 'Luxuri', price: 750, highlight: true },
  { name: 'Premium', price: 650, highlight: false },
  { name: 'Family', price: 390, highlight: false },
];

import { useRouter } from 'expo-router';

export default function SalaScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Scegli la sala</Text>
      <View style={styles.cards}>
        {sale.map((sala) => (
          <TouchableOpacity
            key={sala.name}
            style={[styles.card, sala.highlight && styles.highlight]}
            onPress={() => router.push('/extra')}
          >
            <Text style={styles.cardTitle}>{sala.name}</Text>
            <Text style={styles.cardPrice}>{sala.price}€</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  cards: {
    flexDirection: 'row',
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    marginHorizontal: 8,
    shadowColor: palette.shadow,
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
    alignItems: 'center',
  },
  highlight: {
    borderWidth: 2,
    borderColor: palette.primary,
    shadowRadius: 24,
  },
  cardTitle: {
    color: palette.primary,
    fontWeight: '700',
    fontSize: 20,
  },
  cardPrice: {
    color: palette.text,
    fontWeight: '600',
    fontSize: 18,
    marginTop: 8,
  },
});