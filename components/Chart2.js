import React from 'react';
import { Chart, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

class Chart_2 extends React.Component{
  render() {
    return(
      <Chart
      style={{ height: 200, width: 400 }}
      padding={{ left: 55, bottom: 40, right: 35, top: 20 }}
      xDomain={{ min: 0, max: 20 }}
      yDomain={{ min: 0, max: 20 }}
      viewport={{ size: { width: 5} }}
    >
      <VerticalAxis 
        tickCount={11} 
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }} 
      />
      <HorizontalAxis 
        tickCount={10} 
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }} 
      />
      <Area 
        theme={{ gradient: { from: { color: '#4A148C' }, 
        to: { color: '#4A148C', opacity: 0.4 } }}} 
        smoothing="cubic-spline"
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
          { x: 11, y: 8 },
          { x: 13, y: 12 },
          { x: 15, y: 14 },
          { x: 16, y: 12 },
          { x: 18, y: 13.5 },
          { x: 20, y: 18 },
        ]}
      />
      <Area 
        theme={{ gradient: { from: { color: '#1DE9B6' }, 
        to: { color: '#1DE9B6', opacity: 0.4 } }}} 
        smoothing="cubic-spline"
        data={[
          { x: 0, y:  10},
          { x: 1, y: 5 },
          { x: 2, y: 9 },
          { x: 3, y: 8},
          { x: 4, y: 15 },
          { x: 5, y: 18 },
          { x: 6, y: 15 },
          { x: 7, y: 10 },
          { x: 8, y: 12 },
          { x: 9, y: 13.5 },
          { x: 11, y: 7 },
          { x: 13, y: 2 },
          { x: 15, y: 5},
          { x: 16, y: 9 },
          { x: 18, y: 6},
          { x: 20, y: 5},
        ]}
      />
    </Chart>
    )
  }
}

export default Chart_2;