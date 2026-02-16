// EventTypeScreen – Scegli tipo evento
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { palette, typography } from '../../design-system/palette';

export default function EventTypeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Scegli il tipo di evento</Text>
      <View style={styles.cards}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sala')}>
          <Text style={styles.cardTitle}>Sala EVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Location')}>
          <Text style={styles.cardTitle}>Location esterna</Text>
        </TouchableOpacity>
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
    gap: 24,
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
  },
  cardTitle: {
    color: palette.primary,
    fontWeight: '700',
    fontSize: 20,
  },
});
