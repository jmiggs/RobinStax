import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom';
import Search from './search_container'

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        searchVal: '',
      }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    location.href = `#/asset/${this.state.searchVal}`
  }

  handleLogout(e) {
    this.props.logout();


  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
 
    return (
      
      <div className="toolbar-nav-container">
        <div className="header-group">
          <div className="right-toolbar">
            <Link to="/#" >
              <FontAwesomeIcon icon="money-bill-wave" className="icon" size="2x" />
            </Link>
            {/* <div className="search-bar-container"> 
              <FontAwesomeIcon icon="search-dollar" className="search-icon" size="sm"   />
              <form onSubmit={(e) => this.handleSubmit(e)} className="search-bar">
              <input
                  type="text"
                  value={this.state.searchVal}
                  onChange={this.update('searchVal')}
                  className="searchbar"
                  placeholder={'Search'}
              />
              </form>
            </div> */}
            <Search />
          </div>

          <div className="links-container">
            <div className="greeting">
            Hello, {this.props.currentUser.username}!
            </div>
              {/* <img src={require('../../../public/logo_cash.png')} /> */}
              <Link to='/'> <div className="button-next-nav"> Portfolio </div></Link>
              <a href="https://github.com/jmiggs/RobinStax"> GitHub <FontAwesomeIcon icon={['fab', 'github']} className="socials" size="sm"   /></a>
              <a href="https://www.linkedin.com/in/jdelacruzm/"> LinkedIn <FontAwesomeIcon icon={['fab', 'linkedin']} className="socials" size="sm" /></a>
              <button type="submit" className="header-button" onClick={()=>this.handleLogout()}><div className="button-text-nav">Log Out</div></button>
          </div>

        </div>
      </div>
    )

  };
};

export default Toolbar;
