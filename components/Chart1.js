import React from 'react'
import { Chart, Line, HorizontalAxis, VerticalAxis, Tooltip} from 'react-native-responsive-linechart'


class Chart_1 extends React.Component{
  render() {
    return(
      <Chart
      style={{ height: 200, width: 400 }}
      data={[
        { x: 0, y: 1 },
        { x: 1, y: 3 },
        { x: 2, y: 4 },
        { x: 3, y: 5},
        { x: 4, y: 6 },
        { x: 5, y: 8 },
        { x: 6, y: 9 },
        { x: 7, y: 11 },
        { x: 8, y: 12},
        { x: 9, y: 14},
        { x: 11, y: 15},
        { x: 15, y: 16},
        { x: 19, y: 16},
        { x: 20, y: 16},
      ]}
      padding={{ left: 55, bottom: 40, right: 35, top: 20 }}
      xDomain={{ min: 0, max: 20 }}
      yDomain={{ min: 0, max: 20 }}
    >
      <VerticalAxis 
        tickCount={10} 
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }} 
      />
      <HorizontalAxis tickCount={6} />
      <Line
        tooltipComponent={<Tooltip />}
        theme={{ stroke: { color: '#F06292', width: 5 }, 
          scatter: { default: { width: 12, height: 12, rx: 10, color: '#E91E63' }, 
          selected: { color: '#880E4F' } } }}
      />
    </Chart>
    )
  }
}

export default Chart_1;