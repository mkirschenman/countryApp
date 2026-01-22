import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Button, Text} from 'react-native';
import React, { ReactElement } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { favoritesComponent } from './contextProvider';

export default function MoreInformation({}) {
  const router = useRouter();
  const params = useLocalSearchParams();

    const displayExtraDetails = (data:any):ReactElement=>{
    return <View style={{backgroundColor: "#98919165", margin: 10, paddingBottom: 10, borderRadius:10, marginHorizontal:10}}>
           <Text style={{textAlign: "center", padding: 10, fontSize: 20}}>{`${params.name}`}</Text>
           <Text style={{textAlign: "center"}}>{`Officail Name: ${params.name}`}</Text>
            <Text style={{textAlign: "center"}}>{`Population: ${params.population}`}</Text>
            <Text style={{textAlign: "center"}}>{`Region: ${params.region}`}</Text>
            <Text style={{textAlign: "center"}}>{`SubRegion: ${params.subRegion}`}</Text>
            <Text style={{textAlign: "center"}}>{`Capital: ${params.capital}`}</Text>
            <Text style={{textAlign: "center"}}>{`Timezones: ${params.timeZones}`}</Text>
            <Text style={{textAlign: "center"}}>{`Languages: ${params.languages}`}</Text>
            <Text style={{textAlign: "center"}}>{`Borders: ${params.borders}`}</Text>
            <Text style={{textAlign: "center"}}>{`Currencies: ${params.currencies}`}</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});