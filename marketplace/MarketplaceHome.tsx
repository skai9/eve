// MarketplaceHome – Home del marketplace EVE
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VendorCard from '../components/marketplace/VendorCard';

export default function MarketplaceHome() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>EVE</Text>
        <Text style={styles.profile}>👤</Text>
      </View>
      <Text style={styles.title}>Scopri i migliori organizzatori per il tuo evento</Text>
      <VendorCard
        name="Team Loris Animazione"
        image={require('../assets/images/vendor-teamloris.jpg')}
        rating={4.9}
        description="Animazione, feste e magia per bambini. Esperienza premium."
        badge="Top Partner"
        onPress={() => {/* naviga a VendorPage Team Loris */}}
      />
      {/* Qui in futuro altre VendorCard */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8FF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24 },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#6C47FF', letterSpacing: 2 },
  profile: { fontSize: 24 },
  title: { fontSize: 20, fontWeight: '600', marginHorizontal: 24, marginBottom: 24, color: '#1A1A1A' },
});
