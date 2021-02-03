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
          <View style={{justifyContent: 'center'}}>
            <AreaChart
                style={{ height: 200, width: 350}}
                data={data}
                contentInset={{ top: 30, bottom: 30, left: 30,}}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>
          </View>
        )
    }
}

export default Chart_4;