import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { GeneralColors } from '@/constants/Colors';
import Header from '@/components/Header';

export default function PharmacieDeGarde() {
  const [pharmacies] = useState([
    { id: '1', name: 'Pharmacie Saint Luc', number: '+225 07 789 123 45', location: 'Cocody, Angré 8ème Tranche' },
    { id: '2', name: 'Pharmacie Avocatier', number: '+225 05 678 543 21', location: 'Marcory, Résidentiel' },
    { id: '3', name: 'Pharmacie Indénié', number: '+225 01 234 567 89', location: 'Adjamé, Rond Point Indénié' },
    { id: '4', name: 'Pharmacie Sainte Famille', number: '+225 09 876 543 21', location: 'Plateau, Boulevard Lagunaire' },
    { id: '5', name: 'Pharmacie Abobo Nord', number: '+225 08 345 678 90', location: 'Abobo, Derrière Rail' },
    { id: '6', name: 'Pharmacie Renaissance', number: '+225 07 543 210 98', location: 'Yopougon, Toits Rouges' },
    { id: '7', name: 'Pharmacie Bietry', number: '+225 06 789 012 34', location: 'Treichville, Avenue 12' },
  ]);

  const renderCard = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.name}</Text>
      </View>
      <Text style={styles.description}>{item.location}</Text>
      <Text style={styles.number}>{item.number}</Text>
      <View style={styles.trait}></View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Pharmacies de Garde" />
      <View style={styles.filter}>
        <TextInput style={styles.input} placeholder="Nom de la commune" />
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color="#6c757d" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Rechercher une pharmacie" />
        </View>
      </View>
      <FlatList
        data={pharmacies}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Aucune pharmacie trouvée</Text>}
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
    borderRadius: 10,
    padding: 7,
    flex: 1,
  },
  cardHeader: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  trait: {
    borderBottomColor: GeneralColors.primary.freshGreen,
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  number: {
    fontSize: 14,
    color: '#777',
  },
});
