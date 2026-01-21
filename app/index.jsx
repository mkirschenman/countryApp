import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
const router = useRouter();
//start countries app here main screen
  return (
    <View style={styles.container}>
      <Text>Start!</Text>
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