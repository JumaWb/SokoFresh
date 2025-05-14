import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const categorizedProducts = {
  Fruits: [
    {
      id: '1',
      name: 'Fresh Tomatoes',
      farmer: 'Jane Doe',
      location: 'Eldoret',
      price: 'Ksh 120 / Kg',
      status: 'online',
      image: 'https://images.unsplash.com/photo-1591171551239-80a5eddd627a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlc2glMjB0b21hdG9lc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: '1',
      name: 'Bananas',
      farmer: 'Mary Joseph',
      location: 'Kisii',
      price: 'Ksh 120 / Kg',
      status: 'online',
      image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ],
  Cereals: [
    {
      id: '2',
      name: 'Green Maize',
      farmer: 'John Mwangi',
      location: 'Murang’a',
      price: 'Ksh 60 / Pc',
      status: 'offline',
      image: 'https://images.unsplash.com/photo-1651667343153-6dc318e27e41',
    },
    {
      id: '3',
      name: 'Onions',
      farmer: 'Brian Juma',
      location: 'Murang’a',
      price: 'Ksh 60 / Pc',
      status: 'offline',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510',
    },
  ],
  Livestock: [
    {
      id: '4',
      name: 'Cows',
      farmer: 'Mary Kaiteny',
      location: 'Murang’a',
      price: 'Ksh 60,000 /cow',
      status: 'online',
      image: 'https://images.unsplash.com/photo-1580570598977-4b2412d01bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvd3N8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '4',
      name: 'Chickens',
      farmer: 'Mary Kaiteny',
      location: 'Murang’a',
      price: 'Ksh 60 / Pc',
      status: 'online',
      image: 'https://images.unsplash.com/photo-1441122456239-401e92b73c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbnN8ZW58MHx8MHx8fDA%3D',
    },
  ],
};

export default function Home() {
  const router = useRouter();

  const renderSection = (title, items) => (
    <View style={{ marginBottom: 24 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.gridContainer}>
        {items.map((item) => (
          <View key={item.id} style={styles.gridCard}>
            <Image source={{ uri: item.image }} style={styles.gridImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.detail}>{item.farmer} • {item.location}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <View
              style={[styles.statusDot, {
                backgroundColor: item.status === 'online' ? 'green' : 'gray',
              }]}
            />
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['#34A853', '#FDD835']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.logoGradient}
        >
          <Text style={styles.logo}>SokoFresh</Text>
        </LinearGradient>
        <Ionicons name="notifications-outline" size={28} color="#333" />
      </View>

      {/* Search Bar */}
      <TextInput placeholder="Search produce..." style={styles.searchBar} />

      {/* Category Buttons */}
      <View style={styles.categories}>
        <TouchableOpacity>
          <Ionicons name="grid-outline" size={24} color="#34A853" />
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="flame-outline" size={24} color="#34A853" />
          <Text style={styles.categoryText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="basket-outline" size={24} color="#34A853" />
          <Text style={styles.categoryText}>Basket</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {Object.entries(categorizedProducts).map(([category, items]) =>
          renderSection(category, items)
        )}
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="#34A853" />
        <Ionicons name="receipt-outline" size={24} color="#777" />
        <Ionicons name="wallet-outline" size={24} color="#777" />
        <Ionicons name="person-outline" size={24} color="#777" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoGradient: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryText: {
    textAlign: 'center',
    color: '#34A853',
    fontSize: 12,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridCard: {
    width: '48%',
    backgroundColor: '#FFF8E7',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  gridImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
  },
  detail: {
    fontSize: 11,
    color: '#555',
    marginVertical: 2,
  },
  price: {
    fontSize: 13,
    color: '#34A853',
    fontWeight: 'bold',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFF8E7',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});