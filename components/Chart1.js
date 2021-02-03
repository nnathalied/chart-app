import React from 'react';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

class Chart_1 extends React.Component{
  render() {
    return(
      <Chart
      style={{ height: 200, width: 400 }}
      data={[
        { x: -5, y: 0 },
        { x: -4, y: 7 },
        { x: -3, y: 6 },
        { x: -2, y: 8 },
        { x: -1, y: 15 },
        { x: 0, y: 18},
        { x: 1, y: 16 },
        { x: 2, y: 13 },
        { x: 3, y: 8 },
        { x: 4, y: 3 },
        { x: 5, y: 0 },
      ]}
      padding={{ left: 55, bottom: 40, right: 35, top: 20 }}
      xDomain={{ min: -5, max: 5 }}
      yDomain={{ min: 0, max: 20 }}
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