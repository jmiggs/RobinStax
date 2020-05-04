import React from 'react';
// import logo from '../../../public/logo_cash.png'


const Toolbar = ({ currentUser, logout }) => (
  <div className="toolbar-nav-container">

    <div className="header-group">

      <div className="links-container">
        <div className="greeting">
        Hello, {currentUser.username}!
        </div>
        {/* <img src={require('../../../public/logo_cash.png')} /> */}
       
        <button type="submit" className="header-button" onClick={logout}><div>Log Out</div></button>
      </div>
      <div>
      </div>

    </div>
  </div>

);

export default Toolbar;
