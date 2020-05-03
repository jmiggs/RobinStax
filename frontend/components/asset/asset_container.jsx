import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
// import Main from './main';
import Asset from './asset'
import { ThunkFetch5D } from '../../actions/asset_actions'




const mapStateToProps = (state, symbol) => {

  return({
  currentUser: state.entities.users[state.session.id],
  renderType: 'Asset',
  data: state.data[symbol.symbol]
  }
  )
};

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({
  fetchStockQuote: (sym) => dispatch(ThunkFetch5D(sym))
});

export default connect(mapStateToProps, mapDispatchToProps)(Asset);