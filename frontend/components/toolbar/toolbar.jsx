import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom';



// import logo from '../../../public/logo_cash.png'
// Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>



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
          <FontAwesomeIcon icon="money-bill-wave" className="icon" size="2x"   />
          <div className="search-bar-container"> 
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
          </div>

          <div className="links-container">
            <div className="greeting">
            Hello, {this.props.currentUser.username}!
            </div>
              {/* <img src={require('../../../public/logo_cash.png')} /> */}
              <Link to='/'> <div className="button-next-nav"> Portfolio </div></Link>
              <Link to='/pizza'> <div className="button-next-nav"> Get Cash </div></Link>
              <Link to='/pizza'> <div className="button-next-nav"> Account </div></Link>
              <button type="submit" className="header-button" onClick={()=>this.handleLogout()}><div className="button-text-nav">Log Out</div></button>
          </div>

        </div>
      </div>
    )

  };
};

export default Toolbar;
