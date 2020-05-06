import React from 'react';

import ToolbarContainer from '../toolbar/toolbar_container';
import AssetContainer from '../asset/asset_container';
import Portfolio from '../portfolio/portfolio_container.jsx';
import QuickLookContainer from '../quicklook/quicklook_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      initStat: this.props.initStat
    }
  }

  componentDidMount() {
    if (!this.props.initStat) {
      // this.props.fetchAll();
      // this.props.updateInitStatus()
    }
  };



  render() {

    return (
      <div className="main-background">
        <div>
          <ToolbarContainer />
        </div>
        <div className="main-body-container">
          <div className="content-container">{this.props.renderType === 'portfolio' ? <Portfolio /> : <AssetContainer symbol={this.props.symbol} />}</div>
          <div className="ql-container">
            <div className="ql-general">
              <QuickLookContainer />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Main;
