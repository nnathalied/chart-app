import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
 
class Chart_1 extends React.PureComponent {
    render() {
        const fill = '#64DD17'
        const data = [50, 10, 40, 95, 4, 24, null, 85, undefined, 0, 35, 53, 53, 24, 50, 20, 80]
 
        return (
            <BarChart 
              style={{ height: 200, width: 350, margin: 20, left: 5}}
              data={data} svg={{ fill }} 
              contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
        )
    }
}
export default Chart_1;

