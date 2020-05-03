import React from 'react';

import ToolbarContainer from '../toolbar/toolbar_container';
import AssetContainer from '../asset/asset_container';
import Portfolio from '../portfolio/portfolio_container.jsx';
import QuickLook from '../quicklook/quicklook';

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

        <QuickLook />

        {this.props.renderType === 'portfolio' ? <Portfolio /> : <AssetContainer symbol={this.props.symbol} />}

      </div>

    );
  }
}

export default Main;
