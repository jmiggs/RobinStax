import React from 'react';
import { Link } from 'react-router-dom';


class Quicklook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sharesCount: 3,
    }
    // this.preventText = this.preventText.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const asset = { ...this.state };
    this.props.processForm(user);
  }

  update(e, field) {
    this.setState({ [field]: e.currentTarget.value })
  }
   


  // preventText(e) {
  //   console.log(e.currentTarget)
  // }

  render() {

    if (!this.props.data) return null;
      let { latestPrice } = this.props.data;
      let estCost = latestPrice * this.state.sharesCount;

    return(
      <div className="ql">

        <div className="transaction-links-container">
          <div className="trans-links1">
            <div>Buy {this.props.data.symbol}</div>
          </div>
          <form className="shares-form-box">

            <div className="calc-container">
              <div className="trans-links2"> 
                <div>Shares</div>
                <div>
                  <input className="buy-input"
                    type="text"
                    value={this.state.sharesCount}
                    onChange={(e) => this.update(e,'sharesCount')}
                    className="shares-input"
                   
                 
                    
                  /> 
                </div>
              </div>
              <div className="trans-links2">
                
                  <div>Market Price</div>
                  <div>${latestPrice.toFixed(2)}</div>
            
              </div>
              <div className="trans-links3">
                <div>Estimated Cost</div>
                <div>${(estCost.toLocaleString('en'))}</div>
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
  }
  
};


export default Quicklook;