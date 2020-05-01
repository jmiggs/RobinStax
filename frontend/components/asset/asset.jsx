import React from 'react';

class Asset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchStock(this.props.symbol);
  }

  render() {
    if (!this.props.assets.stock) return null
      return (
        <div className="four-back">
          <div className="four-text hit-the-floor">
            stok price:
            {this.props.symbol}
            {this.props.assets.stock.open}
          </div>
        </div>
      );

  }
}

export default Asset;
