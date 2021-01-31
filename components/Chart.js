import React from 'react';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

class Line_Chart extends React.Component{
  render() {
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
  }
}

export default Line_Chart;
