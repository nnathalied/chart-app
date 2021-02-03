import React from 'react';
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class Chart_3 extends React.PureComponent {
  render() {
    const data = [ 15, 5, 20, 10]
    return (
      <BarChart
        style={{ height: 200, width: 350, left:25}}
        data={data}
        svg={{ fill: '#EF5350' }}
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.1}
        gridMin={0}
        yMax={25}
      >
        <Grid direction={Grid.Direction.HORIZONTAL}/>
      </BarChart>
    )
  }
}

export default Chart_3;