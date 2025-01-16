import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { GeneralColors } from '@/constants/Colors';
import { useState } from 'react';
import HomeItemCard from '@/components/HomeItemCard';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [items, setItems] = useState([
    {
      title: 'Médicaments', 
      logo: 'local-pharmacy',
      link:"/(tabs)/medicament"
    },
    {
      title: 'Ambulances',
      logo: 'local-hospital',
      link:'/(tabs)/ambulance'
    },
    {
      title: 'Hopitaux',
      logo: 'medical-services',
      link:'/(tabs)/hopital'
    },
    {
      title: 'Pharmacies',
      logo: 'storefront',
      link:'/(tabs)/pharmacie'
    },
    {
      title: 'GSPM',
      logo: 'fire-truck',
      link:'/(tabs)/gspm'
    },
    {
      title: 'Autres',
      logo: 'category',
      link:'/(tabs)'
    }
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TiKAKLA</Text>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.homItemCardCOntainer}
            onPress={()=> router.navigate(item.link)}
          >
            <HomeItemCard title={item.title} logo={item.logo} key={index} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>La santé n'a pas de prix!</Text>
        <Text style={styles.footerSubText}>Prenez soin de vous et de vos proches.</Text>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>En savoir plus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  header: {
    backgroundColor: GeneralColors.primary.freshGreen,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#6C757D",
    paddingTop: 43,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  headerTitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    letterSpacing: 1,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: "100%",
    flex: 1,
    marginHorizontal: 10,
    marginTop: 30
  },
  homItemCardCOntainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#DFF2E1',
    width: '48%',
    borderRadius: 10,
    marginVertical: '3%',
    flexWrap: 'wrap',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  footer: {
    position: "absolute",
    bottom: "15%",
    left:"15%",
    alignItems: 'center',
  },
  footerText: {
    color: '#28A745',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerSubText: {
    color: '#6C757D',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  footerButton: {
    marginTop: 15,
    backgroundColor: '#28A745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  footerButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
