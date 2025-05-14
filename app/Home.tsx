import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Welcome to SokoFresh</Text>
      <Text style={styles.subtitle}>Your trusted digital marketplace</Text>

      {/* Example navigation buttons */}
      <TouchableOpacity style={styles.card} onPress={() => alert('View Products')}>
        <Ionicons name="leaf-outline" size={24} color="#34A853" />
        <Text style={styles.cardText}>View Products</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => alert('Track Orders')}>
        <Ionicons name="cart-outline" size={24} color="#34A853" />
        <Text style={styles.cardText}>Track Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => alert('Check Wallet')}>
        <Ionicons name="wallet-outline" size={24} color="#34A853" />
        <Text style={styles.cardText}>My Wallet</Text>
      </TouchableOpacity>

      {/* Log out (optional) */}
      <TouchableOpacity style={styles.logout} onPress={() => router.replace('/login')}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
    color: '#222',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
    color: '#333',
  },
  logout: {
    flexDirection: 'row',
    backgroundColor: '#34A853',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 8,
  },
});
