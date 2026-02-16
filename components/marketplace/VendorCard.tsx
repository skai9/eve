// VendorCard – Card partner marketplace
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VendorCard({ name, image, rating, description, badge, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.hero} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>⭐ {rating}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.badge}><Text style={styles.badgeText}>{badge}</Text></View>
        <View style={styles.cta}><Text style={styles.ctaText}>Prenota ora</Text></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 24, margin: 24, shadowColor: '#6C47FF22', shadowOpacity: 1, shadowRadius: 24, elevation: 6 },
  hero: { width: '100%', height: 180, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  info: { padding: 20 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#6C47FF' },
  rating: { fontSize: 16, color: '#FBBF24', marginVertical: 4 },
  description: { fontSize: 15, color: '#1A1A1A', marginBottom: 8 },
  badge: { backgroundColor: '#FFD6E0', alignSelf: 'flex-start', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4, marginBottom: 8 },
  badgeText: { color: '#6C47FF', fontWeight: '600', fontSize: 13 },
  cta: { backgroundColor: '#6C47FF', borderRadius: 16, paddingVertical: 10, paddingHorizontal: 32, alignSelf: 'flex-start' },
  ctaText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
