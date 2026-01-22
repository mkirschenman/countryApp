import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import { useQuery } from "@tanstack/react-query";
import React, { ReactElement } from 'react';

const retrieveCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,subregion,languages,timezones,currencies,borders,flag");
  if (!response.ok) {
    throw new Error("Issue With Response");
  }
  return response.json();
};

const displayCountries = (data:any):ReactElement=>{
  return <View>
     { 
     data.map((entry:any[])=>{
        return <>
          <Text style={{textAlign: "center"}}>{`${entry.flag} ${entry.name.common}`}</Text>
          <Text style={{textAlign: "center"}}>{`Population: ${entry.population}`}</Text>
          <Text style={{textAlign: "center"}}>{`Region: ${entry.region}`}</Text>
          <Text style={{textAlign: "center"}}>{`Capitol ${entry.capital[0]}`}</Text>
          <Button title ={`More Information on ${entry.name.common}`} onPress={()=>{router.navigate('')}}></Button>
        </>
      })
    }
  </View>
}

export default function AppIndex() {
  const router = useRouter();

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
          <Button title ="Button " onPress={()=>{router.push('myapp/moreInformationPage.tsx')}}></Button>
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