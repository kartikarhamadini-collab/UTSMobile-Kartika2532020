import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status.toLowerCase() === 'selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.badge,
          isSelesai ? styles.selesai : styles.proses,
        ]}
      >
        <Text
          style={[
            styles.statusText,
            isSelesai ? styles.selesaiText : styles.prosesText,
          ]}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 14,
  },
  selesai: {
    backgroundColor: '#DDF5E5',
  },
  selesaiText: {
    color: '#218447',
  },
  proses: {
    backgroundColor: '#FFF0D9',
  },
  prosesText: {
    color: '#C77B16',
  },
  statusText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
