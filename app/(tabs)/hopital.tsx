import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { GeneralColors } from '@/constants/Colors';
import Header from '@/components/Header';

export default function hopital() {
  const [hopitaux] = useState([
    { id: '1', name: 'CHU de Cocody', number: '+225 07 797 983 12', location: 'Cocody, Riviera 2' },
    { id: '2', name: 'Hôpital Général de Yopougon', number: '+225 01 234 567 89', location: 'Yopougon, Niangon' },
    { id: '3', name: 'Hôpital Militaire d’Abidjan', number: '+225 09 876 543 21', location: 'Plateau, Rue des Forces Armées' },
    { id: '4', name: 'Polyclinique Avicennes', number: '+225 07 654 321 98', location: 'Treichville, Avenue 20' },
    { id: '5', name: 'Clinique Farah', number: '+225 05 432 109 87', location: 'Marcory, Zone 4' },
    { id: '6', name: 'Hôpital Général de Bingerville', number: '+225 06 987 654 32', location: 'Bingerville, Quartier Résidentiel' },
    { id: '7', name: 'Polyclinique Internationale Sainte Anne-Marie (PISAM)', number: '+225 08 123 456 78', location: 'Cocody, Rue des Jardins' },
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
      <Header title="Hopitaux" />
      <View style={styles.filter}>
        <TextInput style={styles.input} placeholder="Nom de la commune" />
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color="#6c757d" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Rechercher un hopital" />
        </View>
      </View>
      <FlatList
        data={hopitaux}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Aucun hopital trouvé</Text>}
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
