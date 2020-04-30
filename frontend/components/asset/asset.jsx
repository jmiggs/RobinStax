import React from 'react';

class Asset extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }


  render() {
    return(
      <div className="four-back">
        <div className="four-text hit-the-floor">
          stok price: 
          {this.props.symbol}
        </div>
      </div>
    )
  }
}

export default Asset;