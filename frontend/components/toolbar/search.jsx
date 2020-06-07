import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal: ''
    }

    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllStocks();
  }

  renderResults() {

    if (this.props.stocks) {
      
      if (this.state.searchVal !== '') {
 
        let results = this.props.stocks.filter(stock => {
           if (stock.symbol.slice(0, this.state.searchVal.length).includes(this.state.searchVal.toUpperCase()) || 
                stock.name.toUpperCase().slice(0, this.state.searchVal.length).includes(this.state.searchVal.toUpperCase()) ) {
                  return stock
                }
        }).slice(0, 20) 

        console.log(results)
    
        return(
          <div className="search-res-container">
            <div className="search-header">
              Stocks
            </div>
            {results.map(res => {
              return(
                <div className="res-cont">
                  <Link to={`/asset/${res.symbol}`} className='search-Link' id={res.symbol} onClick={()=>this.clearInput()}>
                    <div id="search-res-item">
                      <div id="res-sym">{res.symbol}</div>
                      <div id="res-name">{res.name}</div> 
                    
                    </div>
                  </Link>
                </div>
              ) 
            })} 

          </div>
        )
      }
    }

  }

  update(e) {
    this.setState({
      searchVal: e.currentTarget.value
    })
  }

  clearInput(e) {
    this.setState({
      searchVal: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    location.href = `#/asset/${this.state.searchVal}`
    this.clearInput()
  }


  render() {

    return(
      <div className="outer-search">
        <div className="search-bar-container" onMouseLeave={() => this.clearInput() }>
          <div className="search-input-cont">
            <FontAwesomeIcon icon="search-dollar" className="search-icon" size="sm"   />
            <form onSubmit={(e) => this.handleSubmit(e)} className="search-bar">
            <input
                type="text"
                value={this.state.searchVal}
                onChange={(e) => this.update(e)}
                className="searchbar"
                placeholder={'Search'}
            />
            </form> 
          </div>    
        {this.renderResults()}
        </div>
      </div>
    )
  }

}

export default Search;