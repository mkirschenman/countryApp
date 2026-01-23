import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React from 'react';
import { FavoriteContextProvider } from './contextProvider';
 './contextProvider';

const queryClient = new QueryClient();

//Root Layout for the App with screens and routes
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Provide Favorites Context for the App*/}
      <FavoriteContextProvider>
        <Stack>
          {/* Index file main screen with countries*/}
          <Stack.Screen name="index" options={{ headerTitle: 'Countries Information App' }} />
          {/* Information Page with country details*/}
          <Stack.Screen name="moreInformationPage" options={{ headerTitle: 'More Information' }} />
        </Stack>
      </FavoriteContextProvider>
    </QueryClientProvider>
  );
}