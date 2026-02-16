// VendorPage – Pagina partner Team Loris
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VendorPage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organizza la festa perfetta con Team Loris</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation?.navigate('booking-sala')}>
        <Text style={styles.cardTitle}>Sala Team Loris</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation?.navigate('booking-location')}>
        <Text style={styles.cardTitle}>Animazione presso location esterna</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8FF', alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#6C47FF', marginBottom: 32, textAlign: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 32, marginVertical: 12, shadowColor: '#6C47FF22', shadowOpacity: 1, shadowRadius: 16, elevation: 4, width: 280, alignItems: 'center' },
  cardTitle: { color: '#6C47FF', fontWeight: '700', fontSize: 20 },
});
