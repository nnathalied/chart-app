import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}> Charts Demo </Text>

          <Text style={styles.chartHeaderText}> Chart 1 </Text>
          <Chart
            style={{ height: 200, width: 400 }}
            data={[
              { x: 0, y: 12 },
              { x: 1, y: 7 },
              { x: 2, y: 6 },
              { x: 3, y: 8 },
              { x: 4, y: 10 },
              { x: 5, y: 8 },
              { x: 6, y: 12 },
              { x: 7, y: 14 },
              { x: 8, y: 12 },
              { x: 9, y: 13.5 },
              { x: 20, y: 18 },
            ]}
            padding={{ left: 55, bottom: 40, right: 35, top: 20 }}
            xDomain={{ min: 0, max: 20 }}
            yDomain={{ min: 0, max: 20 }}
            viewport={{ size: { width: 5} }}
          >
            <VerticalAxis 
              tickCount={11} 
              theme={{ labels: { formatter: (v) => v.toFixed(2) } }} 
            />
            <HorizontalAxis tickCount={5} />
            <Area 
              theme={{ gradient: { from: { color: '#ffa502' }, 
              to: { color: '#ffa502', opacity: 0.4 } }}} 
            />
            <Line 
              theme={{ stroke: { color: '#ffa502', width: 5 }, 
              scatter: { default: { width: 4, height: 4, rx: 2 }} }} 
            />
          </Chart>
          
          <Text style={styles.chartHeaderText}> Chart 2 </Text>
          <Chart
            style={{ height: 200, width: 400 }}
            data={[
              { x: 0, y: 12 },
              { x: 1, y: 7 },
              { x: 2, y: 6 },
              { x: 3, y: 8 },
              { x: 4, y: 10 },
              { x: 5, y: 8 },
              { x: 6, y: 12 },
              { x: 7, y: 14 },
              { x: 8, y: 12 },
              { x: 9, y: 13.5 },
              { x: 20, y: 18 },
            ]}
            padding={{ left: 55, bottom: 40, right: 35, top: 20 }}
            xDomain={{ min: 0, max: 20 }}
            yDomain={{ min: 0, max: 20 }}
            viewport={{ size: { width: 5} }}
          >
            <VerticalAxis 
              tickCount={11} 
              theme={{ labels: { formatter: (v) => v.toFixed(2) } }} 
            />
            <HorizontalAxis tickCount={5} />
            <Area 
              theme={{ gradient: { from: { color: '#ffa502' }, 
              to: { color: '#ffa502', opacity: 0.4 } }}} 
            />
            <Line 
              theme={{ stroke: { color: '#ffa502', width: 5 }, 
              scatter: { default: { width: 4, height: 4, rx: 2 }} }} 
            />
          </Chart>
          
          <Text style={styles.chartHeaderText}> Chart 3 </Text>
          <Chart
            style={{ height: 200, width: 400 }}
            data={[
              { x: 0, y: 12 },
              { x: 1, y: 7 },
              { x: 2, y: 6 },
              { x: 3, y: 8 },
              { x: 4, y: 10 },
              { x: 5, y: 8 },
              { x: 6, y: 12 },
              { x: 7, y: 14 },
              { x: 8, y: 12 },
              { x: 9, y: 13.5 },
              { x: 20, y: 18 },
            ]}
            padding={{ left: 55, bottom: 40, right: 35, top: 20 }}
            xDomain={{ min: 0, max: 20 }}
            yDomain={{ min: 0, max: 20 }}
            viewport={{ size: { width: 5} }}
          >
            <VerticalAxis 
              tickCount={11} 
              theme={{ labels: { formatter: (v) => v.toFixed(2) } }} 
            />
            <HorizontalAxis tickCount={5} />
            <Area 
              theme={{ gradient: { from: { color: '#ffa502' }, 
              to: { color: '#ffa502', opacity: 0.4 } }}} 
            />
            <Line 
              theme={{ stroke: { color: '#ffa502', width: 5 }, 
              scatter: { default: { width: 4, height: 4, rx: 2 }} }} 
            />
          </Chart>

          <Text style={styles.chartHeaderText}> Chart 4 </Text>
          <Chart
            style={{ height: 200, width: 400 }}
            data={[
              { x: 0, y: 12 },
              { x: 1, y: 7 },
              { x: 2, y: 6 },
              { x: 3, y: 8 },
              { x: 4, y: 10 },
              { x: 5, y: 8 },
              { x: 6, y: 12 },
              { x: 7, y: 14 },
              { x: 8, y: 12 },
              { x: 9, y: 13.5 },
              { x: 20, y: 18 },
            ]}
            padding={{ left: 55, bottom: 40, right: 35, top: 20 }}
            xDomain={{ min: 0, max: 20 }}
            yDomain={{ min: 0, max: 20 }}
            viewport={{ size: { width: 5} }}
          >
            <VerticalAxis 
              tickCount={11} 
              theme={{ labels: { formatter: (v) => v.toFixed(2) } }} 
            />
            <HorizontalAxis tickCount={5} />
            <Area 
              theme={{ gradient: { from: { color: '#ffa502' }, 
              to: { color: '#ffa502', opacity: 0.4 } }}} 
            />
            <Line 
              theme={{ stroke: { color: '#ffa502', width: 5 }, 
              scatter: { default: { width: 4, height: 4, rx: 2 }} }} 
            />
          </Chart>
        
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
  }
});
