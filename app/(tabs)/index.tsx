import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { GeneralColors } from '@/constants/Colors';
import { useState } from 'react';
import HomeItemCard from '@/components/HomeItemCard';

export default function HomeScreen() {
  const [items, setItems] = useState([
    {
      title: 'Médicaments', logo: 'local-pharmacy'
    },
    {
      title: 'Ambulances',
      logo: 'local-hospital'
    },
    {
      title: 'Hopitaux',
      logo: 'medical-services'
    },
    {
      title: 'Pharmacies',
      logo: 'storefront'
    },
    {
      title: 'GSPM',
      logo: 'fire-truck'
    },
    {
      title: 'Autres',
      logo: 'category'
    }
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TiKaKla</Text>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.homItemCardCOntainer}
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
    paddingTop: 48,
    paddingBottom: 17,
    paddingHorizontal: 10
  },
  headerTitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15
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
