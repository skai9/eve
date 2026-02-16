// StickySummaryBar – Totale sempre visibile
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StickySummaryBar({ total = 0 }: { total?: number }) {
  return (
    <View style={styles.bar}>
      <Text style={styles.total}>Totale: {total}€</Text>
      <Text style={styles.cta}>Procedi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, shadowColor: '#6C47FF22', shadowOpacity: 1, shadowRadius: 16, elevation: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  total: { fontSize: 18, fontWeight: 'bold', color: '#6C47FF' },
  cta: { backgroundColor: '#6C47FF', color: '#fff', borderRadius: 16, paddingVertical: 10, paddingHorizontal: 32, fontWeight: 'bold', fontSize: 16 },
});
