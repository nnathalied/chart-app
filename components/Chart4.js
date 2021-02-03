import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
 
class Chart_4 extends React.PureComponent {
  render() {
    const data = [ -1.38, .15,
      -0.52, 0.03, -0.14,
      1.12, 0.43, 1.4,
      1.15, 1.4, 1.51]
    return (
      <AreaChart
        style={{ height: 200, width: 350, left:25}}
        data={data}
        curve={shape.curveNatural}
        svg={{ stroke: '#2196F3'}}
        showGrid ='true'
        xMin ={0}
        xMax={10}
        yMin ={-2}
        yMax = {2}
      >
        <Grid />
      </AreaChart>
    )
  }
}

export default Chart_4;