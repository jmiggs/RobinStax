import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAll()
    // .then( (data) => 
    //   this.props.postAll(data)
    
  };

  render() {
    if (!this.props.data) return null
    debugger
    return(
        <div className="spinner"></div>
    )
  }

};


export default Greeting;
