import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';

import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'


const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <Chart
        style={{ height: 200, width: 400 }}
        data={[
          { x: -2, y: 15 },
          { x: -1, y: 10 },
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
          { x: 10, y: 18 },
        ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: -2, max: 10 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
        <HorizontalAxis tickCount={5} />
        <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
        <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
      </Chart>
          <Text style={styles.headerText}> Charts Demo </Text>
          <Text> I want to put a chart here </Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{ fontSize: 96 }}>If you like</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{ fontSize: 96 }}>Scrolling down</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{ fontSize: 96 }}>What's the best</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{ fontSize: 96 }}>Framework around?</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{ fontSize: 80 }}>React Native</Text>
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
  }
});
