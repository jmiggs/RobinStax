import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts';


const data1 = [
  { x: 100, y: 1, z: 200 },
  { x: 120, y: 2, z: 260 },
  { x: 170, y: 3, z: 400 },
  { x: 140, y: 4, z: 280 },
  { x: 150, y: 5, z: 500 },
  { x: 110, y: 6, z: 200 },
];

const data2 = [
  { x: 100, y: 1, z: 200 },
  { x: 125, y: 2, z: 260 },
  { x: 175, y: 3, z: 400 },
  { x: 145, y: 4, z: 280 },
  { x: 155, y: 5, z: 500 },
  { x: 115, y: 6, z: 200 },
];

class Earnings extends React.Component {
  render() {
    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="y" name="quarter" unit="Q" />
        <YAxis type="number" dataKey="x" name="weight" unit="$" />
 
        <Scatter name="EPS-Actual" data={data1} fill="#8884d8"/>
        <Scatter name="EPS-Est" data={data2} fill="#FF3333"/>

      </ScatterChart>
    );
  }
}

export default Earnings;