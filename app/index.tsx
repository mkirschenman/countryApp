import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useRouter } from 'expo-router';
import { useQuery } from "@tanstack/react-query";
import React from 'react';


const retrieveCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,subregion,languages,timezones,currencies,borders,flag");
  if (!response.ok) {
    throw new Error("Issue With Response");
  }
  return response.json();
};

export default function AppIndex() {
  const router = useRouter();

  const { data, error, isLoading } = useQuery({
      queryKey: ["postsData"],
      queryFn: retrieveCountries,
    });

    if (isLoading) return <Text>loading...</Text>;
    if (error) return <Text>An error occurred, please retry</Text>;

    return (
      <View style={styles.container}>
        <Text>Start3!</Text>
        <Button title ="Button " onPress={()=>{router.navigate('')}}></Button>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});