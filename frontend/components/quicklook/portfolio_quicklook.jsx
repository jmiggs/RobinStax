import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Quicklook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listName: '',
      activeClass: 'create-list-container'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.deleteList = this.deleteList.bind(this);
  }

  componentDidMount() {
 
    this.props.fetchTransactions();
    this.props.fetchWatchlists();

    this.props.fetchUserStocks(this.props.currentUser.id).then(data => {

      this.props.fetchBatchQuote(data)
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // create redux cycle to post a list
    let { listName } = this.state;
    this.props.processForm(listName);
    this.hideForm();
  }

  // deleteList(id) {
  //   this.props.deleteList(id);
  // }

  showForm() {
    if (this.state.activeClass !== 'create-list-container-on') {
      this.setState({
        activeClass: 'create-list-container-on'
      })
    }
  }
  hideForm() {
    if (this.state.activeClass !== 'create-list-container-off') {
      this.setState({
        activeClass: 'create-list-container-off'
      })
    }
  }

  update(e) {
    this.setState({ 
      listName: e.currentTarget.value,
    })
  }

  render() {

   
    if (!this.props.assets) return null
    let { assets } = this.props

    return (
      <div className="portfolio-ql-cont">
        <div>
          Stocks
        </div>
        <div>
          {Object.keys(assets).map((sym) =>
          <Link to={`/asset/${sym}`} key={sym}>
            <div className="stocks">
              <div className="stocks1">
                <div className="left-side-numbers">
                  <div className="sym">{sym}</div>
                  <div className="num-shares">{this.props.numShares[sym]} Shares</div>
                </div>
                <div className="right-side-numbers">
                  <div className="latest-price">${this.props.assets[sym].quote.close}</div>
                  <div className={this.props.assets[sym].quote.changePercent < 0? 'neg-perc':'percent'}>
                    {(this.props.assets[sym].quote.changePercent * 100).toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          </Link>
          )}
        </div>

        <div className="lists-container">
          <div className="lists-header">
            <div>Lists</div>
            <div className="plus"> <button onClick={()=>this.showForm()}>+</button></div>
          </div>

          <div className={this.state.activeClass} id="create-list-container">
            <form className="list-form" onSubmit={this.handleSubmit}>
              <input type="text"
                      value={this.state.listName}
                      onChange={(e) => this.update(e)}
                      className="create-input"
                      placeholder="List Name"
              />
              <div className="list-buttons">
                <button type="submit" >Create List</button>
              </div>
            </form>
            <div className="list-buttons">
              <button onClick={()=>this.hideForm()} id="cancel-list">Cancel</button>
            </div>    
          </div>
          <div className="lists-map-cont">
            {this.props.wls.map(wl =>
              <Link to={`/watchlist/${wl.id}`} key={wl.id}>
                <div className="lists-list" >
                  <div className='list-item-name'>
                    <FontAwesomeIcon icon="lightbulb" className="list-icon" size="lg"   />
                    {wl.name}
                  </div>
                    {/* <button onClick={()=>this.deleteList(wl.id)} >
                      <FontAwesomeIcon icon="times" className="x-icon" size="xs"   />
                    </button> */}
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

    )
  }
}

export default Quicklook;



