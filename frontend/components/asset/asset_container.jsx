import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
// import Main from './main';
import Asset from './asset'

const mapStateToProps = ({ session, entities: { users } }, { symbol }) => ({
  currentUser: users[session.id],
  renderType: 'Asset',
  symbol,

});

//create fetchStock thunk action and action creator
const mapDispatchToProps = (dispatch) => ({
  fetchStock: (sym) => dispatch(fetchStock(sym))
});

export default connect(mapStateToProps, mapDispatchToProps)(Asset);