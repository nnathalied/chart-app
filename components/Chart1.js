import React from 'react';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

class Chart_1 extends React.Component{
  render() {
    return(
      <Chart
      style={{ height: 200, width: 400 }}
      data={[{"x":0,"y":1.4},
      {"x":2.7,"y":2.5},
      {"x":3.0,"y":6.8},
      {"x":4.7,"y":4.4},
      {"x":5.3,"y":4.9},
      {"x":6.4,"y":6.7},
      {"x":7.8,"y":9.0},
      {"x":8.1,"y":1.8},
      {"x":9.2,"y":9.6},
      {"x":10.3,"y":9.4},
      {"x":11.5,"y":9.1},
      {"x":12.7,"y":9.3},
      {"x":15.0,"y":6.9}]}
      padding={{ left: 55, bottom: 40, right: 35, top: 20 }}
      xDomain={{ min: 0, max: 20}}
      yDomain={{ min: 0, max: 15}}
      viewport={{ size: { width: 5} }}
    >
      <VerticalAxis 
        tickCount={10} 
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }} 
      />
      <HorizontalAxis tickCount={6} />
      <Area 
        smoothing="cubic-spline"
        theme={{ gradient: { from: { color: '#ba68C8' }, 
        to: { color: '#6A1B9A', opacity: 0.4 } }}} 
      />
    </Chart>
    )
  }
}

export default Chart_1;