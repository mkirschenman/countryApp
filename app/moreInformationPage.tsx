import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

export default function MoreInformation() {
//   const router = useRouter();
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <Button title ="Button " onPress={()=>{router.back()}}></Button> */}
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