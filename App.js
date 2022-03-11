import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Tugas15 from './Tugas/Tugas15/index';
import Quiz3 from './Quiz3/index'
import Home from './Quiz3/Home';
import Tugas19 from './Tugas/Tugas19/index';

export default function App() {
  return (
    <Quiz3/>
    //<Tugas15 />
    //<View style={styles.container}>
     // <Text>Open up App.js to start working on your app!</Text>
     // <StatusBar style="auto" />
   // </View>
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
