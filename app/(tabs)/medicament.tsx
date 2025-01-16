import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { GeneralColors } from '@/constants/Colors';
import Header from '@/components/Header';

export default function Medicament() {
  const [medicaments, setMedicaments] = useState([
    {
      id: '1',
      name: 'Paracétamol',
      price: '300 FCFA',
      description: 'Soulage la douleur et réduit la fièvre. Convient pour usage courant.',
      pharmacy: 'Pharmacie Agban',
      location: 'Attécoubé, Agban Village',
    },
    {
      id: '2',
      name: 'Ibuprofène',
      price: '500 FCFA',
      description: 'Anti-inflammatoire pour douleurs articulaires et musculaires.',
      pharmacy: 'Pharmacie Cocody',
      location: 'Cocody, Boulevard des Martyrs',
    },
    {
      id: '3',
      name: 'Amoxicilline',
      price: '700 FCFA',
      description: 'Antibiotique efficace pour les infections bactériennes.',
      pharmacy: 'Pharmacie Plateau',
      location: 'Plateau, Rue des Jardins',
    },
    {
      id: '4',
      name: 'Vitamine C',
      price: '200 FCFA',
      description: 'Renforce le système immunitaire et lutte contre la fatigue.',
      pharmacy: 'Pharmacie Marcory',
      location: 'Marcory, Rue 12',
    },
  ]);

  const renderCard = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.trait}></View>
      <Text style={styles.pharmacy}>{item.pharmacy}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Médicaments"/>
      <View style={styles.filter}>
        <TextInput style={styles.input} placeholder="Nom de la commune" />
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color="#6c757d" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Rechercher un médicament" />
        </View>
      </View>
      <FlatList
        data={medicaments}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
        ListEmptyComponent={<Text style={{textAlign:"center"}}>Aucun médicament n'a été retrouvé</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  filter: {
    paddingHorizontal: 8,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: GeneralColors.primary.freshGreen,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  cardList: {
    paddingHorizontal: 8,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GeneralColors.primary.freshGreen,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  trait: {
    borderBottomColor: GeneralColors.primary.freshGreen,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  pharmacy: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
});
