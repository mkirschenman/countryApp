import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React from 'react';
import { FavoriteContextProvider } from './contextProvider';
 './contextProvider';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteContextProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerTitle: 'Countries Information App' }} />
          <Stack.Screen name="moreInformationPage" options={{ headerTitle: 'More Information' }} />
        </Stack>
      </FavoriteContextProvider>
    </QueryClientProvider>
  );
}