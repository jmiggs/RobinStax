import React from 'react';
import Counter from './counter';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import CustomTooltip from './customTooltip'

// test data of the graph
const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // this is creating a reference to the Counter Component
    this.refCounter = React.createRef();
  }

  renderCounter(e) {

    this.refCounter.current.updatePrice(e);
  }

  render() {

      return (
        <div>

          Graph
          <Counter ref={this.refCounter} data={this.props.data[0]} />
          <LineChart
            width={730}
            height={250}
            data={this.props.data}
            margin={{
              top: 5, right: 30, left: 0, bottom: 5,
            }}
          >
            <YAxis domain={["auto", "dataMax+4"]} axisLine={{ stroke: 'white' }} tick={true} />
            <XAxis domain={[0, 500000]} axisLine={{ stroke: 'white' }} tick={true} />
            <Tooltip content={<CustomTooltip />} position={{y:0}} isAnimationActive={false} unit={.01} />
            <Line dataKey="average" domain={["dataMin", "dataMax"]} dot={false} activeDot={this.renderCounter.bind(this)} />

            {/* saved options for LineGraph  */}
            {/* content={this.showTooltipData.bind(this)} */}

          </LineChart>
        </div>
      );
  }
}

export default Graph;