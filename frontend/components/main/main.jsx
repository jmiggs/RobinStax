import React from 'react';

import ToolbarContainer from '../toolbar/toolbar_container';
import AssetContainer from '../asset/asset_container';
import Portfolio from '../portfolio/portfolio_container.jsx';
import QuickLookContainer from '../quicklook/quicklook_container';
import PortfolioQuickLook from '../quicklook/portfolio_quicklook_container';
import WatchlistContainer from '../portfolio/watchlist_container';
import Notifs from './notif_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      initStat: this.props.initStat,
      raining: true
    }
  }
  /// for initiation
  componentDidMount() {
  };

  render() {

    return (
      <div className="main-background">
        <div>
          <ToolbarContainer />
        </div>
        <div className="main-body-container">
          <div className="content-container">
            {this.props.wlIndicator? <WatchlistContainer /> :
              this.props.renderType === 'portfolio' ? <Portfolio /> : <AssetContainer symbol={this.props.symbol}/>}
          </div>
          <div className="ql-container">
            <div className="ql-general">
            {this.props.renderType === 'portfolio'? <PortfolioQuickLook /> : <QuickLookContainer />}
            </div>
          </div>
        </div>
        <div>
            <Notifs />
        </div>
      </div>

    );
  }
}

export default Main;
