import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: this.props.currentUser,
      initStat: this.props.initStat
    }
  }

  componentDidMount() {
    if (!this.props.initStat) {
      this.props.fetchAll();
      this.props.updateInitStatus()
    }
  };

  render() {
    if (!this.props.data) return null
    return(
        <div className="spinner"></div>
    )
  }

};


export default Greeting;
