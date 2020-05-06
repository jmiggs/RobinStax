import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './portfolio';
import { fetchUserStocks } from '../../util/asset_util'
import { fetchBatch5D } from '../../actions/asset_actions'


const mapStateToProps = (state) => ({
  currentUser: state.session.id

});

const mapDispatchToProps = (dispatch) => ({
  fetchUserStocks: (id) => fetchUserStocks(id),
  fetchBatch5D: (data) => dispatch(fetchBatch5D(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);