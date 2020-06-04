
import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { fetchAllStocks } from '../../actions/asset_actions';



const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  stocks: state.entities.assets.allStocks


});

const mapDispatchToProps = (dispatch) => ({
  fetchAllStocks: () => dispatch(fetchAllStocks()),
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);