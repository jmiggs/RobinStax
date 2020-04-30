import React from 'react';

const Toolbar = ({ currentUser, logout }) => (
  <div>

    <div className="header-group">

      <div className="header-name">
        this is the toolbar 
        {currentUser.username}
        !
      </div>
      <div>
        <button type="submit" className="header-button" onClick={logout}>Log Out</button>
      </div>

    </div>
  </div>

);

export default Toolbar;
