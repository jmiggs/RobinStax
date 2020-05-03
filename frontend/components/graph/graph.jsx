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
      tab: '1D',
    };

    // this is creating a reference to the Counter Component
    this.refCounter = React.createRef();
  }

  componentDidMount() {

    this.props.fetch5D(this.props.symbol, '5D');
    // this.props.fetchQuote(this.props.symbol)
  }

  componentDidUpdate() {
    if (!this.props.data) return null
    this.refCounter.current.updateCounterOnTabChange(this.props.data[0])
  }

  renderCounter(e) {
    this.refCounter.current.updateCounter(e);
  }

  handleMouseLeave(e) {
    this.refCounter.current.updateCounterOnLeave(this.props.data.slice(-1).pop())
  }

  fetch1D(e, tab) {
    e.preventDefault();
    this.props.fetch1D(this.props.symbol, tab)
  }

  fetch1M(e, tab) {
    e.preventDefault();
    this.props.fetch1M(this.props.symbol, tab)
  }
  fetch3M(e, tab) {
    e.preventDefault();
    this.props.fetch3M(this.props.symbol, tab)
  }
  fetch1Y(e, tab) {
    e.preventDefault();
    this.props.fetch1Y(this.props.symbol, tab)
  }
  fetch5Y(e, tab) {
    e.preventDefault();
    this.props.fetch5Y(this.props.symbol, tab)
  }


  // all data restructuring should occur at the asset_container.jsx; by the time it 
  // hits the return of the render
  // the data shold be shaped like so:
  // [
  //   {name: "AAPL", price: 400, low: 200, date: someDate }
  //   {name: "AAPL", price: 400, low: 200, date: someDate }
  //   {name: "AAPL", price: 400, low: 200, date: someDate }
  //   {name: "AAPL", price: 400, low: 200, date: someDate }
  // ]

  render() {

      if (!this.props.data) return null
      return (
        <div>
          <div>

            Graph
            <Counter ref={this.refCounter} data={this.props.data.slice(-1).pop()} first={this.props.data[0]} />
            <br/>
            <br/>
            <LineChart
              onMouseLeave={(e) => this.handleMouseLeave(e)}
              width={730}
              height={470}
              data={this.props.data}
              margin={{
                top: 5, right: 30, left: 0, bottom: 5,
              }}
            >
              <YAxis domain={["dataMin", "dataMax"]} axisLine={{ stroke: 'white' }} tick={false} hide={true} />
              <XAxis axisLine={{ stroke: 'white' }} tick={false} />
              <Tooltip content={<CustomTooltip />} position={{y:-30}} isAnimationActive={false} unit={.01} />
              <Line dataKey="price" domain={["dataMin", "dataMax"]} dot={false} activeDot={this.renderCounter.bind(this)} />

              {/* saved options for LineGraph  */}
              {/* content={this.showTooltipData.bind(this)} */}

            </LineChart>
          </div>
          <div className="button=box">
            <button onClick={(e) => this.fetch1D(e, '1D') }> <div> 1D </div> </button>
            {/* <button onClick={(e) => this.fetch1W(e, '1W') }> <div> 1W </div> </button> */}
            <button onClick={(e) => this.fetch1M(e, '1M') }> <div> 1M </div> </button>
            <button onClick={(e) => this.fetch3M(e, '3M') }> <div> 3M </div> </button>
            <button onClick={(e) => this.fetch1Y(e, '1Y') }> <div> 1Y </div> </button>
            <button onClick={(e) => this.fetch5Y(e, '5Y') }> <div> 5Y </div> </button>
          </div>
        </div>
      );
  }
}

export default Graph;