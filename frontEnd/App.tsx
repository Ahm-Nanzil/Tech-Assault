import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterPage from "./src/pages/CounterPage";


const App = () =>{
  return(
  //  <View style={styles.mainContainer}>
  //    <Text style={styles.textContainer}>Hello World !</Text>
  //  </View>
  <CounterPage/>
  )
 }
 
 const styles = StyleSheet.create({
   mainContainer: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center"
   },
   textContainer: {
     fontWeight: "700",
     fontSize: 16,
     color: "red"
   }
 })
 
 export default App;