import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

import Chart_1 from './components/Chart1.js'
import Chart_2 from './components/Chart2.js'
import Chart_3 from './components/Chart3.js'
import Chart_4 from './components/Chart4.js'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}> Charts Demo </Text>
          
          <Text style={styles.chartHeaderText}> Chart 1 </Text>
          <Chart_1></Chart_1>

          <Text style={styles.chartHeaderText}> Chart 2 </Text>
          <Chart_2></Chart_2>

          <Text style={styles.chartHeaderText}> Chart 3 </Text>
          <Chart_3></Chart_3>

          <Text style={styles.chartHeaderText}> Chart 4 </Text>
          <Chart_4></Chart_4>
        
        </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    padding:50,
    fontFamily: "AvenirNext-Bold"
  },
  chartHeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding:10,
    fontFamily: "AvenirNext-Bold"
  },
  chart:{
    borderBottomWidth: 50,
    borderTopWidth: 50,
    borderLeftWidth: 50, 
    borderRightWidth: 50,
  }
});
