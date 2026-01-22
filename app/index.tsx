import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useQuery } from "@tanstack/react-query";
import React, { ReactElement } from 'react';
import { favoritesComponent, useFavorites } from './contextProvider';

const retrieveCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,subregion,languages,timezones,currencies,borders,flag");
  if (!response.ok) {
    throw new Error("Issue With Response");
  }
  return response.json();
};

export default function AppIndex() {
  const router = useRouter();
  const {toggleFavorites} = useFavorites();


  const displayCountries = (data:any[]):ReactElement=>{
  return <View>
    {favoritesComponent()} 
     { 
     data.map((entry, index)=>{
        return <View key ={index} style={{padding: 10}}>
          <Text style={{textAlign: "center"}}>{`${entry.flag} ${entry.name.common}`}</Text>
          <Text style={{textAlign: "center"}}>{`Population: ${entry.population}`}</Text>
          <Text style={{textAlign: "center"}}>{`Region: ${entry.region}`}</Text>
          <Text style={{textAlign: "center"}}>{`Capitol ${entry.capital[0]}`}</Text>
          <Button title = {`Make ${entry.name.common} My Favorite`} onPress={()=>{toggleFavorites(entry.name.common)}}></Button>
            <Button title ={`More Information on ${entry.name.common}`}  onPress={()=>{
              router.push({pathname: '/moreInformationPage', 
                params: {
                name: entry.name.common,
                nameOfficial: entry.name.official,
                population: entry.population,
                region: entry.region,
                subRegion: entry.subregion,
                timeZones: entry.timezones,
                languages: entry.languages,
                borders: entry.borders,
                capital: entry.capital,
                currencies: entry.currencies,
              }})}}></Button>
            </View>
      })
    }
  </View>
}

  const { data, error, isLoading } = useQuery({
      queryKey: [""],
      queryFn: retrieveCountries,
    });

    if (isLoading) return <Text>loading...</Text>;
    if (error) return <Text>An error occurred, please retry</Text>;

    const jsonData = JSON.parse(JSON.stringify(data));

    return (
      <ScrollView>
        <View style={styles.container}>
          {displayCountries(jsonData)}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
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