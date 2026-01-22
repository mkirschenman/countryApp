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
        return <View key ={index}>
          <Text style={{textAlign: "center", paddingBottom: 10, fontSize: 20}}>{`${entry.flag} ${entry.name.common}`}</Text>
          <Text style={{textAlign: "center", padding: 3}}>{`Population: ${entry.population}`}</Text>
          <Text style={{textAlign: "center", padding: 3}}>{`Region: ${entry.region}`}</Text>
          <Text style={{textAlign: "center", paddingTop: 3 }}>{`Capital ${entry.capital[0]}`}</Text>
          <View style={{padding: 10}}>
            <Button title = {`Make ${entry.name.common} My Favorite`} onPress={()=>{toggleFavorites(entry.name.common)}}></Button>
          </View>
          <View style={{paddingHorizontal: 10,paddingBottom: 30}}>
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