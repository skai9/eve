import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { palette, typography } from '../design-system/palette';

export default function ExtraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Aggiungi extra</Text>
      {/* Qui andrà il menu extra stile Glovo */}
      <Text style={styles.placeholder}>[Menu extra in sviluppo]</Text>
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
  placeholder: {
    color: palette.text,
    fontSize: 16,
    opacity: 0.5,
    marginTop: 32,
  },
});