import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';

type HomeItemCardProps = {
  title: string;
  logo: any;
};

export default function HomeItemCard({ title, logo }: HomeItemCardProps) {
  return (
      <View style={styles.container}> 
        <View style={styles.logoContainer}>
          <MaterialIcons name={logo} size={20} color="white" />
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center"
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#45D86E",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom:10
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});
