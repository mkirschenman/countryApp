import { StyleSheet, View, ScrollView, Button, Text} from 'react-native';
import React, { ReactElement } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { favoritesComponent } from './contextProvider';

export default function MoreInformation({}) {
  const router = useRouter();
  const params = useLocalSearchParams();

    const displayExtraDetails = (data:any):ReactElement=>{
    return <View style={styles.countryContainer}>
           <Text style={styles.countryName}>{`${params.name}`}</Text>
           <Text style={styles.textCenter}>{`Officail Name: ${params.name}`}</Text>
            <Text style={styles.textCenter}>{`Population: ${params.population}`}</Text>
            <Text style={styles.textCenter}>{`Region: ${params.region}`}</Text>
            <Text style={styles.textCenter}>{`SubRegion: ${params.subRegion}`}</Text>
            <Text style={styles.textCenter}>{`Capital: ${params.capital}`}</Text>
            <Text style={styles.textCenter}>{`Timezones: ${params.timeZones}`}</Text>
            <Text style={styles.textCenter}>{`Languages: ${params.languages}`}</Text>
            <Text style={styles.textCenter}>{`Borders: ${params.borders}`}</Text>
            <Text style={styles.textCenter}>{`Currencies: ${params.currencies}`}</Text>
          </View>
    }
    return (
      <ScrollView>
        {favoritesComponent()}
        {displayExtraDetails(params)}
        <View style = {{padding: 10}}>
        <Button title ="Back To List " onPress={()=>{router.back()}}></Button> 
        </View>
      </ScrollView>
    );
}


const styles = StyleSheet.create({
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
    textAlign: "center"
  }
});