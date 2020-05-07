import React from 'react';
import { Link } from 'react-router-dom';


class Quicklook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
   
    if (!this.props.assets) return null
    let { assets } = this.props
  
    // const stockSymbols = Object.keys(assets).map((sym) =>
 
    //   <div>
    //     <div>{sym}</div>
    //     <div>{this.props.assets[sym][Object.keys(assets).length - 1].close}</div>
    //   </div>
    // )


    return (
      <div className="portfolio-ql-cont">
        <div>
          Stocks
        </div>
        <div>
          {Object.keys(assets).map((sym) =>
            <div className="stocks">
              <div className="stocks1">
                <div className="sym">{sym}</div>
                <div className="right-side-numbers">
                  <div className="latest-price">${this.props.assets[sym][Object.keys(assets).length - 1].close}</div>
                  <div className={
                                  (((this.props.assets[sym][Object.keys(assets).length-1].close-this.props.assets[sym][0].close)
                                  /this.props.assets[sym][0].close)*100).toFixed(2)
                                  < 0? 
                                  'neg-perc':'percent'}>
                    {(((this.props.assets[sym][Object.keys(assets).length-1].close-this.props.assets[sym][0].close)/this.props.assets[sym][0].close)*100).toFixed(2)}%</div>
              </div>
              </div>
            </div>
          )}
        </div>
        <div className="lists-header">
          <div>Lists</div>
          <div className="plus"> + </div>
        </div>

        
      </div>

    )


  }


}

export default Quicklook;



