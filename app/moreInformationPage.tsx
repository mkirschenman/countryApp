import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Button, Text} from 'react-native';
import React, { ReactElement } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function MoreInformation({}) {
  const router = useRouter();
  const params = useLocalSearchParams();

    const displayExtraDetails = (data:any):ReactElement=>{
    return <View>
           <Text style={{textAlign: "center"}}>{`${params.name}`}</Text>
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
        <View style={styles.container}>
            {displayExtraDetails(params)}
           <Button title ="Back To List " onPress={()=>{router.back()}}></Button> 
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