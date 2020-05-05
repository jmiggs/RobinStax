import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
// import Main from './main';
import QuickLook from './quicklook'
import { ThunkFetchQuote, ThunkFetch5D, ThunkFetchInfo, ThunkFetchNews, ThunkFetchEarnings } from '../../actions/asset_actions'
import { fetch5D } from '../../util/iex_util';


const mapStateToProps = (state, symbol) => {

  return({
  currentUser: state.entities.users[state.session.id],
  renderType: 'Asset',
  data: state.data.quote,
  }
  )
};

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({
  // fetchStockQuote: (sym) => dispatch(ThunkFetchQuote(sym)),
  // fetch5D: (sym) => dispatch(ThunkFetch5D(sym)),
  // fetchInfo: (sym) => dispatch(ThunkFetchInfo(sym)),
  // fetchNews: (sym) => dispatch(ThunkFetchNews(sym)),
  // fetchEarnings: (sym) => dispatch(ThunkFetchEarnings(sym))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickLook);