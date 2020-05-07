import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
// import Main from './main';
import QuickLook from './portfolio_quicklook'
import { ThunkFetchQuote, ThunkFetch5D, ThunkFetchInfo, ThunkFetchNews, ThunkFetchEarnings } from '../../actions/asset_actions'
import { fetch5D } from '../../util/iex_util';
import { postTransaction } from '../../actions/transactions_actions'

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
  assets: !state.entities.assets.portfolio? null : dataFiller(state.entities.assets.portfolio, '5D'),

  }
  )
};

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({
  processForm: (data) => dispatch(postTransaction(data))
  // fetchStockQuote: (sym) => dispatch(ThunkFetchQuote(sym)),
  // fetch5D: (sym) => dispatch(ThunkFetch5D(sym)),
  // fetchInfo: (sym) => dispatch(ThunkFetchInfo(sym)),
  // fetchNews: (sym) => dispatch(ThunkFetchNews(sym)),
  // fetchEarnings: (sym) => dispatch(ThunkFetchEarnings(sym))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickLook);