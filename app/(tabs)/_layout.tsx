import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="ambulance" options={{ headerShown: false }} />
        <Stack.Screen name="gspm" options={{ headerShown: false }} />
        <Stack.Screen name="hopital" options={{ headerShown: false }} />
        <Stack.Screen name="medicament" options={{ headerShown: false }} />
        <Stack.Screen name="pharmacie" options={{ headerShown: false }} />
      </Stack>
  );
}
