import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './portfolio';
import { fetchUserStocks } from '../../util/asset_util'
import { fetchBatch5D } from '../../actions/asset_actions'
import { fetchAll } from '../../util/iex_util';


const mapStateToProps = (state) => ({
  currentUser: state.session.id,
  status: state.entities.assets.emptystatus

});

const mapDispatchToProps = (dispatch) => ({
  fetchUserStocks: (id) => fetchUserStocks(id),
  fetchBatch5D: (data) => dispatch(fetchBatch5D(data)),
  fetchAll: () => fetchAll()
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);