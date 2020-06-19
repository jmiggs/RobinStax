import React from 'react';

export default class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClass: 'confirm-modal-hide',

    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  hideModal(e) {

    if (this.state.modalClass === 'confirm-modal-show') {
      this.setState({
        modalClass: 'confirm-modal-hide'
      })
    }
  }

  showModal() {
    if (this.state.modalClass === 'confirm-modal-hide') {
      this.setState({
        modalClass: 'confirm-modal-show'
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const asset = {
      amount: this.props.information.amount,
      cost: this.props.information.cost,
      transtype: this.props.information.transtype,
      symbol: this.props.information.symbol
    };
    this.hideModal(e)
    this.props.processForm(asset)
    location.href = "#/";
  }

  render() {
    return(
      <div className={this.state.modalClass}>
        <div className="confirm-modal-container">
          <div className="confirm-header">
            {this.props.transtype === 'buy'? 
              `Buy ${this.props.information.symbol}`: `Sell ${this.props.information.symbol}`}?
          </div>

          <div className="confirm-numbers">
            <div className="confirm-details">
              Transaction Details
            </div>
            <div className="confirm-nums">
              <div className="calcs">
                <div>
                  # of Shares:
                </div>
                <div>
                  {this.props.information.amount}
                </div>
              </div>
              <div className="calcs">
                <div>
                  Price per Share:
                </div>
                <div>
                  {this.props.information.cost.toLocaleString('en', {style: "currency",currency: "USD",})}
                </div>
              </div>
              <div className="calcs total">
                <div>
                  Total:
                </div>
                <div>
                  {(this.props.information.amount * this.props.information.cost).toLocaleString('en', {style: "currency",currency: "USD",})}
                </div>
              </div>
              <div className="confirm-final">
                {(this.props.information.amount * this.props.information.cost).toLocaleString('en', {style: "currency",currency: "USD",})} 
                {` `} will be {this.props.transtype === 'buy'? 'withdrawn from': 'credited to'} your account.
              </div>
            </div>
            
          </div>
          <div className="modal-buttons">
              {/* <button type="submit" onClick={(e) => this.handleSubmit(e)}> Save </button> */}
              <button onClick={(e)=>this.handleSubmit(e)}> Confirm</button>
              <button id="modal-cancel" onClick={(e)=>this.hideModal(e)}> Cancel</button>
            </div>

          
        </div>
      </div>

    )
  }

}