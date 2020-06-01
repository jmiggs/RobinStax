import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
// import Main from './main';
import QuickLook from './portfolio_quicklook'
import { fetchBatchQuote } from '../../actions/asset_actions'
import { fetch5D } from '../../util/iex_util';
import { postTransaction } from '../../actions/transactions_actions'
import { fetchTransactions } from '../../actions/transactions_actions';
import { createWatchlist, fetchWatchlists } from '../../actions/watchlist_actions';
import { deleteWatchlist } from '../../actions/watchlist_actions';
import { fetchUserStocks } from '../../util/asset_util'

const dataFiller = (data, currTab) => {
  if (!data) return null;
  switch (currTab) {
    case '1D':
    case '1M':
    case '5D':
        let parser = {};  
        Object.keys(data).forEach( key =>
          parser[key] = data[key].chart
        );
        return parser
    case '3M':
    case '1Y':
    case '5Y':
      return( 'hi'
        // array.map( (dataPoint, idx) => {
        //   if (!dataPoint.close) {
        //     let newAvg = array[idx -1].close
        //     return { price: newAvg, date: dataPoint.date, label: dataPoint.label}
        //   } else {
        //     return { price: dataPoint.close, date: dataPoint.date, label: dataPoint.label }
        //   };
        // })
      );
    default:
      break;
  }
};

const mapStateToProps = (state, symbol) => {
  return({
    currentUser: state.entities.users[state.session.id],
    renderType: 'Portfolio',
    assets: state.entities.assets.portfolioQuotes,
    numShares: state.entities.assets.numShares,
    wls: state.entities.watchlists.wls
  })
};

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({
  processForm: (data) => dispatch(createWatchlist(data)),
  fetchTransactions: () => dispatch(fetchTransactions()),
  fetchWatchlists: () => dispatch(fetchWatchlists()),
  deleteList: (id) => dispatch(deleteWatchlist(id)),
  fetchUserStocks: (id) => fetchUserStocks(id),
  fetchBatchQuote: (data) => dispatch(fetchBatchQuote(data))
  // fetchStockQuote: (sym) => dispatch(ThunkFetchQuote(sym)),
  // fetch5D: (sym) => dispatch(ThunkFetch5D(sym)),
  // fetchInfo: (sym) => dispatch(ThunkFetchInfo(sym)),
  // fetchNews: (sym) => dispatch(ThunkFetchNews(sym)),
  // fetchEarnings: (sym) => dispatch(ThunkFetchEarnings(sym))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickLook);