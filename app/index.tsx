import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useQuery } from "@tanstack/react-query";
import React, { ReactElement } from 'react';
import { favoritesComponent, useFavorites } from './contextProvider';

//Calls to retrieve the countries data from the API, 
//checks to see if the response is ok before returning the json data
const retrieveCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,subregion,languages,timezones,currencies,borders,flag");
  if (!response.ok) {
    throw new Error("Issue With Response");
  }
  return response.json();
};

//App Entry point
export default function AppIndex() {
  const router = useRouter(); //router needed to navigate
  const {toggleFavorites} = useFavorites(); //hook to be able to toggle favorites

//This function displays all of the countries from the api data
  const displayCountries = (data:any[]):ReactElement=>{
  return <View>
    {favoritesComponent()} 
     { 
     data.map((entry, index)=>{
        return <View key ={index} style={styles.countryContainer}>
          <Text style={styles.countryName}>{`${entry.flag} ${entry.name.common}`}</Text>
          <Text style={styles.textCenter}>{`Population: ${entry.population}`}</Text>
          <Text style={styles.textCenter}>{`Region: ${entry.region}`}</Text>
          <Text style={styles.textCenter}>{`Capital ${entry.capital[0]}`}</Text>
          <View style={styles.favoritesButton}>
            {/* This Button will set a new favorite country */}
            <Button title = {`Make ${entry.name.common} My Favorite`} onPress={()=>{toggleFavorites(entry.name.common)}}></Button>
          </View>
          <View style={styles.InfoButton}>
             {/* This Button will send you to the more information screen */}
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
 
//Sets up the query for use, helps to check if we have an error or are in loading status
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

//styles for the main screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryContainer: {
    backgroundColor: "#98919165", 
    margin: 10, 
    paddingBottom: 10, 
    borderRadius:10, 
    marginHorizontal:10
  },
  countryName: {
    textAlign: "center",
    padding: 10,
    fontSize: 20
  },
  textCenter: {
    textAlign: "center",
    padding: 3
  },
  favoritesButton: {
    padding: 10, 
    paddingBottom: 0
  },
  InfoButton: {
    padding: 10
  }
});