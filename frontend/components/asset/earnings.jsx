import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts';


const data1 = [
  { x: 100, y: 1,},
  { x: 120, y: 2,},
  { x: 170, y: 3,},

];

const data2 = [
  { x: 100, y: 1},
  { x: 125, y: 2},
  { x: 175, y: 3},

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

    ticks.push(Math.min(...values))
    ticks.push(((Math.max(...values) - Math.min(...values))/3) + Math.min(...values))
    ticks.push((((Math.max(...values) - Math.min(...values))/3)*2) + Math.min(...values))
    ticks.push(Math.max(...values))


    this.setState({yTicks: ticks})

  }

  formatXAxis(item) {
    return `Q${item}`
  }

  render() {
    debugger
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