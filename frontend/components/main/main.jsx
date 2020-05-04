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
      <div className="main-background">
        <div>
          <ToolbarContainer />
        </div>
        <div className="main-body-container">
          <div className="content-container">{this.props.renderType === 'portfolio' ? <Portfolio /> : <AssetContainer symbol={this.props.symbol} />}</div>
          <div className="ql-container"><QuickLook /></div>
        </div>
      </div>

    );
  }
}

export default Main;
