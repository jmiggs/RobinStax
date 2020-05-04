import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts';


const data1 = [
  { x: 6.9, y: 1,},
  { x: 5.2, y: 2,},
  { x: 7.3, y: 3,},

];

const data2 = [
  { x: 5.56, y: 1},
  { x: 4.89, y: 2},
  { x: 7.41, y: 3},

];





class Earnings extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      yTicks: '',

    }
  }

  componentDidMount() {
    this.yTickPoints(data2);
  }


  updateYticks() {
    this.yTickPoints(data2);
  }

  yTickPoints(array) {
    let values = [];
    let ticks = [];

  
  
    for (let i = 0; i < array.length; i++) {
      values.push(array[i].x)
    }

    ticks.push((Math.min(...values)).toFixed(2))
    ticks.push( (((Math.max(...values) - Math.min(...values))/3) + Math.min(...values)).toFixed(2))
    ticks.push(((((Math.max(...values) - Math.min(...values))/3)*2) + Math.min(...values)).toFixed(2))
    ticks.push((Math.max(...values)).toFixed(2))


    this.setState({yTicks: ticks})

  }

  formatXAxis(item) {
    return `Q${item}`
  }

  render() {

    let { yTicks } = this.state
    return (
      <ScatterChart
        width={600}
        height={175}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >

        <XAxis type="number" dataKey="y" ticks={[1,2,3]} tickFormatter={this.formatXAxis} />
        <YAxis type="number" dataKey="x" ticks={[ yTicks[0],yTicks[1], yTicks[2], yTicks[3] ]} domain={['dataMin', 'dataMax']} />
 
        <Scatter name="EPS-Actual" data={data1} fill="#8884d8"/>
        <Scatter name="EPS-Est" data={data2} fill="#FF3333"/>

      </ScatterChart>
    );
  }
}

export default Earnings;