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
      tab: '',
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
    this.refCounter.current.updateCounterOnTabChange(this.props.data.slice(-1).pop(), this.props.data[0],)

  }

  renderCounter(e) {
    this.refCounter.current.updateCounter(e);
  }

  handleMouseLeave(e) {
    this.refCounter.current.updateCounterOnLeave(this.props.data.slice(-1).pop(), this.props.data[0], )
  }

  // come back to this for data optimization
  // checkCache(e, tab) {

  //   e.preventDefault();
  //   let searchKey = `${this.props.symbol}${tab}`
  //   if (this.props.cache[searchKey]) {
  //     this.setState({tab: tab})
  //   } else {
  //     switch (tab) {
  //       case '1D':
  //         this.props.fetch1D(this.props.symbol, tab)
  //       // case '5D':
  //       // need 5 day
  //       case '1M':
  //         this.props.fetch1M(this.props.symbol, tab)
  //       case '3M':
  //         this.props.fetch3M(this.props.symbol, tab)
  //       case '1Y':
  //         this.props.fetch1Y(this.props.symbol, tab)
  //       case '5Y':
  //         this.props.fetch5Y(this.props.symbol, tab)
          
  //       default:
  //         break;
  //     }
  //   }
  // };

  fetch1D(e, tab) {
    e.preventDefault();
    this.props.fetch1D(this.props.symbol, tab)
  }

  fetch5D(e, tab) {
    e.preventDefault();
    this.props.fetch5D(this.props.symbol, tab)
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

            <Counter ref={this.refCounter} data={this.props.data.slice(-1).pop()} first={this.props.data[0]} />

            <div className="linechart-container">
              <LineChart
                onMouseLeave={(e) => this.handleMouseLeave(e)}
                width={750}
                height={300}
                data={Object.keys(this.props.cache).includes(`${this.props.symbol}${this.state.tab}`)? 
                        this.props.cache[`${this.props.symbol}${this.state.tab}`] : (this.props.data)}
                margin={{
                  top: 5, right: 30, left: 0, bottom: 5,
                }}
              >
                <YAxis domain={["dataMin", "dataMax"]} axisLine={{ stroke: 'white' }} tick={false} hide={true} />
                <XAxis axisLine={{ stroke: 'white' }} tick={false} />
                <Tooltip content={<CustomTooltip />} position={{y:-30}} isAnimationActive={false}  />
                <Line stroke="#0CABDA" type="monotone" dataKey="price" domain={["dataMin", "dataMax"]} dot={false} activeDot={this.renderCounter.bind(this)} />

                {/* saved options for LineGraph  */}
                {/* content={this.showTooltipData.bind(this)} */}

              </LineChart>
            </div>
          </div>
          <div className="button-box">
            <button onClick={(e) => this.fetch1D(e, '1D') }> <div className="tab-button"> 1D </div> </button>
            <button onClick={(e) => this.fetch5D(e, '5D') }> <div className="tab-button"> 5D </div> </button>
            <button onClick={(e) => this.fetch1M(e, '1M') }> <div className="tab-button"> 1M </div> </button>
            <button onClick={(e) => this.fetch3M(e, '3M') }> <div className="tab-button"> 3M </div> </button>
            <button onClick={(e) => this.fetch1Y(e, '1Y') }> <div className="tab-button"> 1Y </div> </button>
            <button onClick={(e) => this.fetch5Y(e, '5Y') }> <div className="tab-button"> 5Y </div> </button>
          </div>
        </div>
      );
  }
}

export default Graph;