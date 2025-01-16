import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { GeneralColors } from '@/constants/Colors';
import Header from '@/components/Header';

export default function Ambulance() {
  const [ambulances] = useState([
    { id: '1', name: 'Ambulance XXX', number: '+225 07 797 983 12', location: 'Attécoubé, Agban Village' },
    { id: '2', name: 'Ambulance YYY', number: '+225 01 234 567 89', location: 'Cocody, Riviera 2' },
    { id: '3', name: 'Ambulance ZZZ', number: '+225 03 456 789 01', location: 'Treichville, Marché' },
    { id: '4', name: 'Ambulance ZZZ', number: '+225 03 456 789 01', location: 'Treichville, Marché' },
    { id: '5', name: 'Ambulance AAA', number: '+225 05 678 901 23', location: 'Plateau, Avenue 9' },
    { id: '6', name: 'Ambulance AAA', number: '+225 05 678 901 23', location: 'Plateau, Avenue 9' },
    { id: '7', name: 'Ambulance AAA', number: '+225 05 678 901 23', location: 'Plateau, Avenue 9' },
    { id: '8', name: 'Ambulance AAA', number: '+225 05 678 901 23', location: 'Plateau, Avenue 9' },
    { id: '9', name: 'Ambulance AAA', number: '+225 05 678 901 23', location: 'Plateau, Avenue 9' },
    { id: '10', name: 'Ambulance AAA', number: '+225 05 678 901 23', location: 'Plateau, Avenue 9' },
  ]);

  const renderCard = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.name}</Text>
      </View>
      <Text style={styles.description}>{item.location}</Text>
      <View style={styles.trait}></View>
      <Text style={styles.number}>{item.number}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Ambulances" />
      <View style={styles.filter}>
        <TextInput style={styles.input} placeholder="Nom de la commune" />
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color="#6c757d" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Rechercher un médicament" />
        </View>
      </View>
      <FlatList
        data={ambulances}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
        numColumns={2}
        ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Aucune ambulance trouvée</Text>}
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
    margin: 8,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  number: {
    fontSize: 14,
    color: '#777',
  },
});
