import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    debugger

    console.log('hit')
    return(
      <div id="1">
        <div className="splash-nav">
          <div className="splash-nav-left">
            RobinStax
            <FontAwesomeIcon icon="money-bill-wave" className="splash-icon" size="1x"   />
          </div>
          <div className="splash-nav-right">
            <div id='splash-nav-button1' className="splash-nav1">
              <Link to={`/login`}> Log In</Link>
            </div>
            <div id='splash-nav-buttons'>
              <Link to={`/signup`}> Sign Up</Link>
            </div>
          </div>
        </div>
        <div className="splash-content-container">
          <div className="splash-content-left">
            <div id="splash-content-header">
              Learn to 
              <div>Invest</div>
            </div>
            <div id="left-text">
              RobinStax lets you develop your investing practices through building cost-free portfolios.
            </div>
            <div id='get-started'>
              <Link to={`/login`}> Get Started</Link>
            </div>
          </div>
          <div className="splash-content-right">
            <FontAwesomeIcon icon="donate" className="splash-icon-donate" size="5x"   />
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;