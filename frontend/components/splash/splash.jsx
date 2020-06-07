import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

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
        <div className="splash-content-container2">
          <div className="s2-content">
            <div className="s2-break">
              Break Free from Fees.
            </div>
            <div className="s2-descr">
              And any cost at all! Buy or sell stocks and keep track of your favorite companies
              completely free. Simulate real investments. Start with $3000 Buying Power today!
            </div>
          </div>
        </div>
        <div className="splash-content-container3">
          <div className="s3-left">
            <div className="s3-left-header">
              RobinStax Features
            </div>
            <div className="s3-left-content">
              <div className="s3-1">
                <div className="s3-head">
                 Buy and Sell.
                </div>
                <div className="s3-descrs">
                  Be able to buy or sell from up to 8000+ actively traded public companies.
                </div>
              </div>
              <div className="s3-2">
                <div className="s3-head">
                  Watchlists.
                </div>
                <div className="s3-descrs">
                  Create various watchlists to keep track of your favorite stocks.
                </div>
              </div>
              <div className="s3-3">
                <div className="s3-head">
                  Real-time Info.
                </div>
                <div className="s3-descrs">
                  Get real-time, accurate information from Wall Street.
                </div>
              </div>
            </div>
          </div>
          <div className="s3-right">
            
          </div>

        </div>

        <div className="splash-foot">
          <div className="foot-content">
            <div className="create-by">
              created by: <span className="jmd"> Miguel DelaCruz</span>
            </div>
            <div className="git">
              <a className="git" href="https://github.com/jmiggs/RobinStax"> GitHub <FontAwesomeIcon icon={['fab', 'github']}  size="sm"   /></a>
            </div>
            <div className="lin">
              <a className="lin" href="https://www.linkedin.com/in/jdelacruzm/"> LinkedIn <FontAwesomeIcon icon={['fab', 'linkedin']}  size="sm" /></a>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default Splash;