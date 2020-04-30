import React from 'react';

import ToolbarContainer from '../toolbar/toolbar_container';
import AssetContainer from '../asset/asset_container';
import Portfolio from '../portfolio/portfolio_container.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="main-navbar">
          <ToolbarContainer />
        </div>

        {this.props.renderType === 'portfolio' ? <Portfolio /> : <AssetContainer symbol={this.props.match.params.symbol}/>}

      </div>

    );
  }
}

export default Main;
