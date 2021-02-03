import React from 'react'
import {View} from 'react-native'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
 
class Chart_4 extends React.PureComponent {
  render() {
    const data = [2.77, 1.43, 
                  2.79, 8.67, 
                  4.98,  -7.24,
                  9.87, -1.89,
                  -1.41,  -5.95]
    return (
      <AreaChart
        style={{ height: 200, width: 350, left:25}}
        data={data}
        curve={shape.curveNatural}
        svg={{ fill: '#2196F3' }}
      >
        <Grid />
      </AreaChart>
    )
  }
}

export default Chart_4;