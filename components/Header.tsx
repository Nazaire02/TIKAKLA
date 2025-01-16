import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { GeneralColors } from '@/constants/Colors'
import { router } from 'expo-router'

export default function Header({title}: {title:string}) {
  return (
    <View style={styles.header}>
    <Feather name="chevron-left" size={24} color="white" onPress={()=> router.back()}/>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
      header: {
        backgroundColor: GeneralColors.primary.freshGreen,
        paddingTop: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
      },
      headerTitle: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      }
})