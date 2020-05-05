import React from 'react';
import { Link } from 'react-router-dom';


const Quicklook = ({ currentUser, logout }) => {
  return(
    <div className="ql">

      <div className="transaction-links-container">
        <div className="trans-links1">
          <div>Buy STOCKHERE</div>
        </div>
        <form className="login-form-box">

          <div className="calc-container">
            <div className="trans-links2"> 
              <div>Shares</div>
              <div>
                <input className="buy-input"
                  // type="text"
                  // value={this.state.username}
                  // onChange={this.update('username')}
                  // className="login-input"
                /> 
              </div>
            </div>
            <div className="trans-links2">
              
                <div>Market Price</div>
                <div> stock price </div>
           
            </div>
            <div className="trans-links3">
              <div>Estimated Cost</div>
              <div> maths</div>
            </div>
          </div>


          <div className="buy-button-container">
            
            <button className="buy-button">Review Order</button>
          </div>
        </form>
        {/* </form> */}
      </div>
      <div id="or-space"> Or </div>
      <div className="wl-button-container">
        <button className="wl-button">Add to WatchList</button>
      </div>

    </div>
  )
};


export default Quicklook;