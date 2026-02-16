// ExtrasConfigurator – Scelta extra intelligente
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ExtrasConfigurator() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aggiungi extra</Text>
      {/* Menu extra, categorie, regole marketplace */}
      <Text style={styles.placeholder}>[Menu extra in sviluppo]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8FF', alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#6C47FF', marginBottom: 32, textAlign: 'center' },
  placeholder: { color: '#1A1A1A', fontSize: 16, opacity: 0.5, marginTop: 32 },
});
