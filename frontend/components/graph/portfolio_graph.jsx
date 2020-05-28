import React from 'react';
import Counter from './counter';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import CustomTooltip from './customTooltip'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: this.props.currentUser,
      initStat: this.props.initStat
    }
  }



  render() {
    return(
        <div className="spinner">
          graph>
          </div>
    )
  }

};


export default Greeting;